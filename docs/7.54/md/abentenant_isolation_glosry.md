---
title: "tenant_isolation_glosry"
description: |
  tenant_isolation_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentenant_isolation_glosry.htm"
abapFile: "abentenant_isolation_glosry.htm"
keywords: ["do", "if", "try", "data", "abentenant", "isolation", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

tenant isolation

Tenant isolation indicates a situation where the data in different [tenants](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentenant_glosry.htm "Glossary Entry") is isolated from each other. In a [multitenancy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmegatenancy_glosry.htm "Glossary Entry") system, the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") supports tenant isolation by ensuring that an [application program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_program_glosry.htm "Glossary Entry") can only access the [application client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_client_glosry.htm "Glossary Entry") assigned to the current tenant. Read-only access to data in the [system client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_client_glosry.htm "Glossary Entry") is also possible. [Multitenancy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmegatenancy_glosry.htm "Glossary Entry") is not supported in the current release.