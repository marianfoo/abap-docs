---
title: "Access to Objects in SAP HANA XS"
description: |
  SAP HANA XS(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxs_glosry.htm 'Glossary Entry') (SAP HANA Extended Application Services) covers tools used to develop, manage, and execute native objects on the SAP HANA platform. This section describes the different ways of accessing SAP
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_access.htm"
abapFile: "abensap_hana_access.htm"
keywords: ["do", "if", "try", "method", "data", "abensap", "hana", "access"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_hana.htm) → 

Access to Objects in SAP HANA XS

[SAP HANA XS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxs_glosry.htm "Glossary Entry") (SAP HANA Extended Application Services) covers tools used to develop, manage, and execute native objects on the SAP HANA platform. This section describes the different ways of accessing SAP HANA XS objects from ABAP programs. Two SAP HANA XS versions are distinguished here:

-   The current [SAP HANA XSA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_access_xsa.htm)
-   The preceding [SAP HANA XSC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_access_xsc.htm)

Hint

[SAP HANA XSA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxsa_glosry.htm "Glossary Entry") replaces [SAP HANA XSC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxsc_glosry.htm "Glossary Entry"). The [access methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_access_xsc.htm) designed specifically for XSC objects are not suitable for XSA objects. After all XSC objects have been migrated to XSA, the access methods designed for XSC become mostly obsolete. Especially, [SAP HANA XSC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxsc_glosry.htm "Glossary Entry") is not supported by a [SAP HANA Cloud database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_cloud_db_glosry.htm "Glossary Entry"). More information can be found in [SAP Note 2465027](https://launchpad.support.sap.com/#/notes/2465027).

Continue
[Access to SAP HANA XSA Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_access_xsa.htm)
[Access to SAP HANA XSC Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_access_xsc.htm)