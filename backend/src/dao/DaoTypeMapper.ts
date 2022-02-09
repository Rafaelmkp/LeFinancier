import FileDaoFactory from "./daofactory/FileDaoFactory";
import IDaoFactory from "./daofactory/IDaoFatory";

export default abstract class DaoTypeMapper {
  static readonly CONNECTION_MAP: Map<string, IDaoFactory> = new Map([
    ["FILE", FileDaoFactory.Instance]
  ]);
}