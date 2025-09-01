  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) → 

ABAP EML - CONVERT KEY

Syntax

COMMIT ENTITIES BEGIN
  ...
  CONVERT KEY OF entity\_name
  FROM pre\_key
  TO   key.
COMMIT ENTITIES END.

Effect

For entities with [late numbering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_late_numbering.htm), the statement [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_modify.htm) provides only temporary keys. For these temporary keys, a successful save method draws finalized keys. If, for example, the keys of new instances are passed to a HTTP response, they must be the finalized values and not the temporary values from the MODIFY phase. The statement CONVERT KEY is used for this.

The statement CONVERT KEY may only be used in the context of a block-constructing variant of the statement [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_commit_block.htm) to determine the finalized value of a temporary key. In the context of the statement COMMIT ENTITIES, the runtime of the [ABAP RESTful programming model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) holds its key registry to respond to queries from the statement CONVERT KEY. In the statement COMMIT ENTITIES END, this information is then deleted.

In its dynamic form, the statement CONVERT KEY is passed the name of the entity and does not perform a static type check.

Remarks

-   Unlike the other [EML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) statements, CONVERT KEY does not operate on tables. This is because the consumer typically iterates across the consumer’s own data and needs to fill specific columns. The preceding extraction of all pre\_keys, following by a mass conversion and insertion of keys in the target table would be more time-consuming and use more resources than repeating the direct individual operation.

-   Within a [behavior implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm), the statement CONVERT KEY is permitted only in the [SAVE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_method_save.htm) method. If this rule is violated, the runtime error BEHAVIOR\_ILLEGAL\_STATEMENT occurs.