### Sequelize
- sequelize cli 에서 모델 만들기
```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```
- 모델 만들고 실제 DB에 해당 모델 migrate
```bash
npx sequelize-cli db:migrate
```

- sequelize cli 에서 seed (demo data) 만들기
```bash
npx sequelize-cli seed:generate --name demo-user
```