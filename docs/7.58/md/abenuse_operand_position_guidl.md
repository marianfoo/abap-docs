  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [System Fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20Elements%20in%20Operand%20Positions%2C%20ABENUSE_OPERAND_POSITION_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

Using Elements in Operand Positions

Background   

Statements that modify the content of system fields generally evaluate the operands first and then set the system fields. In some complex statements, however, a system field could be set first, before all operand positions are evaluated.

Rule   

Do not use system fields in statements that set the fields

For reasons of robustness, do not use system fields as operands of statements that themselves set these system fields.

Details   

A program does not always define whether a particular system field is set in a statement before or after an operand is evaluated. This means that, to reduce risks and to make the program easier to read, the content of a system field should always be copied to a helper variable and only this copy should be used within the statement in question.

Hint

Also take note of how functional methods are used in operand positions. These methods also modify important system fields. Also be careful here when using system fields in operand positions of the same statement.

Bad Example

The following source code shows how the system field sy-tabix is used in a READ statement that sets the system field itself. The case shown here does not itself present any difficulties, however we still recommend you follow the rule above, not least to make the code more readable.

LOOP AT itab1 ... WHERE ...
   ...
   READ TABLE itab2 ... INDEX sy-tabix.
   ...
ENDLOOP.

Good Example

The following source code makes the example above more robust by assigning the value of the system field sy-tabix to a helper variable before it is used.

LOOP AT itab1 ... WHERE ...
   index = sy-tabix.
   ...
   .... itab2\[ index \] ...
   ...
ENDLOOP.