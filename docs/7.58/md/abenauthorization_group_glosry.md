---
title: "authorization_group_glosry"
description: |
  authorization_group_glosry - ABAP 7.58 language reference documentation
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_group_glosry.htm"
abapFile: "abenauthorization_group_glosry.htm"
keywords: ["do", "if", "try", "data", "abenauthorization", "group", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20authorization%20group%2C%20ABENAUTHORIZATION_GROUP_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

authorization group

[Program property](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_property_glosry.htm "Glossary Entry") that allows the combination of different programs into groups for shared [authorization checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_check_glosry.htm "Glossary Entry"). The group name is an [authorization field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_field_glosry.htm "Glossary Entry") of the [authorization object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_PROGRAM, for which an [authorization check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_check_glosry.htm "Glossary Entry") is performed when an [executable program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is executed using the statement [SUBMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubmit.htm). This is done to check whether the current [ABAP user](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_user_glosry.htm "Glossary Entry") is authorized to execute the program. All authorization groups should be stored in the database table TPGP.