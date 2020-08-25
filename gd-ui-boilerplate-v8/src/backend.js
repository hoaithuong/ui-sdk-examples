// Copyright (C) 2007-2020, GoodData(R) Corporation. All rights reserved.
import bearFactory, {
  ContextDeferredAuthProvider
  // FixedLoginAndPasswordAuthProvider
} from "@gooddata/sdk-backend-bear";

const config = {
  hostname: ""
};

if (process.env.NODE_ENV === "production") {
  const gdUrl = process.env.GD_URL;
  config.hostname = gdUrl
    ? `https://${gdUrl}`
    : "https://developer.na.gooddata.com";
}

const backend = bearFactory(config).withAuthentication(
  new ContextDeferredAuthProvider()
  // new FixedLoginAndPasswordAuthProvider(
  //   "jiri.zajic+viewer@gooddata.com",
  //   "asdf1234"
  // )
);

window.gooddata = backend;

export default backend;
