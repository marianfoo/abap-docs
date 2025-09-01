  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) →  [ABAP EML - COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_commit_entities.htm) → 

ABAP EML - COMMIT ENTITIES BLOCK

Syntax

COMMIT ENTITIES BEGIN
  *\[*RESPONSES *\[*OF root\_names*\]**\]*
  *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
  *\[*REPORTED it\_reported *|*DATA(it\_reported)*\]*.
  ...
COMMIT ENTITIES END.

Effect

In the context of the statement [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_commit_entities.htm), the runtime of the [ABAP RESTful programming model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) holds its key registry to respond to queries from the statement [CONVERT KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconvert_key.htm). In the statement COMMIT ENTITIES END, this information is then deleted.