---
title: "tenant_isolation_glosry"
description: |
  tenant_isolation_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_isolation_glosry.htm"
abapFile: "abentenant_isolation_glosry.htm"
keywords: ["do", "try", "data", "abentenant", "isolation", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

tenant isolation

Tenant isolation means that the data of one tenant is isolated from the other [tenants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_glosry.htm "Glossary Entry"). In a [multitenancy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmegatenancy_glosry.htm "Glossary Entry") system, the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") supports tenant isolation by allowing an [application program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_program_glosry.htm "Glossary Entry") to access only the data of the [application client](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_client_glosry.htm "Glossary Entry") assigned to the current tenant. Read access to the [system client](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_client_glosry.htm "Glossary Entry") is also possible. [Multitenancy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmegatenancy_glosry.htm "Glossary Entry") is not supported in the current release.