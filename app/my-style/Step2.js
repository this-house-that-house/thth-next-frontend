import Button from '../components/Button'
import Check from '../components/Check';
import { vars, questionContainer, container, toggleContainer } from '../components/index.css'
import { useEffect, useState } from 'react';
import { reqGetTag } from '../apis/tag';

export default function ({ selectedTags = [] }) {
  const [conditionList, setConditionList] = useState([]);
  const [nessessaryList, setNessessaryList] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);
  const [selectedNessessary, setSelectedNessessary] = useState([]);

  const selectedConditionToggle = (condition, bool) => {
    if (!bool)
      setSelectedCondition(selectedCondition.filter(c => c !== condition));
    else if (selectedCondition.length >= 3)
      alert('3개까지만 선택 가능합니다.');
    else
      setSelectedCondition([...selectedCondition, condition]);
  }
  const selectedNessessaryToggle = (nessessary, bool) => {
    if (!bool)
      setSelectedNessessary(selectedNessessary.filter(n => n !== nessessary));
    else
      setSelectedNessessary([...selectedNessessary, nessessary]);
  }
  const getConditionList = async () => {
    const res = await reqGetTag({ category: 'pros' });
    if (res.status === 200) {
      setConditionList(res.data);
    }
  }
  const getNessessaryList = async () => {
    const res = await reqGetTag({ category: 'environment' });
    if (res.status === 200) {
      setNessessaryList(res.data);
    }
  }

  useEffect(() => {
    getConditionList();
    getNessessaryList();
  }, []);

  useEffect(() => {
    if (!conditionList.length || !nessessaryList.length || !selectedTags.length) return;
    setSelectedCondition(
      selectedTags.filter(
        tag => conditionList.some(
          c => c.id === tag.id
        )
      ).map(tag => tag.id)
    );
    setSelectedNessessary(
      selectedTags.filter(
        tag => nessessaryList.some(
          n => n.id === tag.id
        )
      ).map(tag => tag.id)
    );
  }, [conditionList, nessessaryList, selectedTags]);

  return (
    <>
      <div className={questionContainer}>
        <span style={{ ...vars.font.headingSB18 }}>가장 중요하게 생각하는 3가지를 골라주세요</span>
        <div className={toggleContainer}>
          {conditionList.map(tag => (
            <Check
              key={tag.id}
              variant={"tag"}
              name={"tag_ids"}
              value={tag.id}
              checked={selectedCondition.includes(tag.id)}
              onChange={e => selectedConditionToggle(tag.id, e.target.checked)}
            >
              {tag.name}
            </Check>
          ))}
        </div>
      </div>
      <div className={questionContainer}>
        <span style={{ ...vars.font.headingSB18 }}>이 시설은 꼭 있어야해요!</span>
        <div className={toggleContainer}>
          {nessessaryList.map(tag => (
            <Check
              key={tag.id}
              variant={"tag"}
              name={"tag_ids"}
              value={tag.id}
              checked={selectedNessessary.includes(tag.id)}
              onChange={e => selectedNessessaryToggle(tag.id, e.target.checked)}
            >
              {tag.name}
            </Check>
          ))}
        </div>
      </div>
      <div className={container} />
      <Button>다음</Button>
    </>
  )
}