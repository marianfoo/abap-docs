  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrobust_abap_gdl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_type_obj_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Immutable%20Variables%2C%20ABENIMMUTABLE_VARIABLES_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Immutable Variables

Background   

An [immutable variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenimmutable_variable_glosry.htm "Glossary Entry") is a special variable that can be assigned a value at exactly one write position of a [context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontext_glosry.htm "Glossary Entry") which cannot be changed at other write positions. Immutable variables can be declared inline with the declaration operator [FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm).

Rule   

Consider using immutable variables

Whenever you want a variable to be filled at exactly one write position and to be read only at all other positions, use an immutable variable.

Details   

An immutable variable prevents unwanted changes to the value of a variable. It combines the robustness of a constant with the flexibility of filling it at any write position. When reading the value of an immutable variable, it is guaranteed that it is filled with the value assigned during the inline declaration and that no other write access can have happened in between. If you are declaring an immutable variable inside a loop, you can be sure that its value is stable for each loop pass.

Bad Example

An internal table is declared inline with the declaration operator DATA and filled with values that are not expected to be changed any more.

TYPES primary\_colors TYPE HASHED TABLE OF string
      WITH UNIQUE KEY table\_line.
DATA(primary\_colors) = VALUE primary\_colors( ( \`yellow\` )
                                             ( \`red\` )
                                             ( \`blue\` ) ).

Good Example

Using the declaration operator FINAL, an immutable table is created, where any later change of the content is prevented in the current context.

TYPES primary\_colors TYPE HASHED TABLE OF string
      WITH UNIQUE KEY table\_line.
FINAL(primary\_colors) = VALUE primary\_colors( ( \`yellow\` )
                                              ( \`red\` )
                                              ( \`blue\` ) ).