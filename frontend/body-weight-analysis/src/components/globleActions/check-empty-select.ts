const CheckEmptySelect = (
  select: HTMLSelectElement,
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const container = select.parentElement;
  const small = (container?.querySelector("small") as HTMLElement) || null;

  if (select.value.trim().length < 1) {
    select.classList.add("empty");
    small.innerText = `Required field`;
    setEmpty(true);
  } else {
    select.classList.remove("empty");
    small.innerText = ".";
    setEmpty(false);
  }
};

export default CheckEmptySelect;
