# lerna example

> React Native UI library example

## included

- jest (enzyme)

## steps

```bash
# react native init
react-native init Example

# lerna ini
npx lerna init

# package create
npx lerna create [library]

# package에서 사용할 dependency 추가
npx lerna add [npm module]

# lerna bootstrap
npx lerna bootstrap

# run packages script (build, test, ...)
npx lerna run [script]

# publish packges (after commit)
npx lerna publish
```

## reference

[Hy-Vee/lerna-yarn-workspaces-monorepo](https://github.com/Hy-Vee/lerna-yarn-workspaces-monorepo)
