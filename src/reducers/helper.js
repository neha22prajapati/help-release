import mock_json from "../data/mock.json";

export function createMock(id) {
  let mock = mock_json.find((m) => m.id === id);
  return mock;
}
