  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [ABAP Entity Manipulation Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm) →  [ABAP EML - COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_entities.htm) → 

ABAP EML - COMMIT ENTITIES BLOCK

\* Work in progress \*

Syntax

COMMIT ENTITIES BEGIN
  *\[*RESPONSES *\[*OF root\_names*\]**\]*
  *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
  *\[*REPORTED it\_reported *|*DATA(it\_reported)*\]*.
  ...
COMMIT ENTITIES END.

Effect

In the context of the statement [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_entities.htm), the runtime of [ABAP RAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_rap_glosry.htm "Glossary Entry") holds its key registry to respond to queries from the statement [CONVERT KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconvert_key.htm). In the statement COMMIT ENTITIES END, this information is then deleted.