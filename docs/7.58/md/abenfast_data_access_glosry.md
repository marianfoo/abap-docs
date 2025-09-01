---
title: "fast_data_access_glosry"
description: |
  fast_data_access_glosry - ABAP 7.58 language reference documentation
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfast_data_access_glosry.htm"
abapFile: "abenfast_data_access_glosry.htm"
keywords: ["select", "do", "if", "try", "data", "internal-table", "abenfast", "access", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20fast%20data%20access%2C%20ABENFAST_DATA_ACCESS_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

fast data access

FDA for short. Protocol that allows the content of [internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry") to be passed between the [Application Server ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") and a [database system](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_system_glosry.htm "Glossary Entry"). FDA is supported by the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") and some other platforms. FDA can be switched on and off with database parameters and [database hints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_hint_glosry.htm "Glossary Entry"). FDA write access is the prerequisite for [SELECT, FROM @itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"). Depending on settings, FDA is also used for [SELECT, FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_all_entries.htm).

[→ More about](https://launchpad.support.sap.com/#/notes/0002399993).