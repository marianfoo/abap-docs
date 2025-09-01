---
title: "authorization_group_glosry"
description: |
  authorization_group_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_group_glosry.htm"
abapFile: "abenauthorization_group_glosry.htm"
keywords: ["do", "if", "try", "data", "abenauthorization", "group", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

authorization group

[Program attribute](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") that allows the combining of different programs into groups for shared [authorization checks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_check_glosry.htm "Glossary Entry"). The group name is an [authorization field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_field_glosry.htm "Glossary Entry") of the [authorization object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_PROGRAM, for which, when an [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is executed using the statement [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm), an [authorization check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_check_glosry.htm "Glossary Entry") is performed implicitly to determine whether the current [user](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_glosry.htm "Glossary Entry") is authorized to execute the program. All authorization groups should be saved in the database table TPGP.