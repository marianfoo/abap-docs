  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [\=, Assignment Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_operator.htm) →  [\=, Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_calc_expr.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%3D%2C%20Bit%20Expression%2C%20ABENEQUALS_BIT_EXPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

\=, Bit Expression

Syntax

result = [bit\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_bit.htm).

Effect

If a [bit expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") [bit\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_bit.htm) is specified on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_operator.htm), a byte chain with the [calculation length](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbitexp_length.htm) is calculated and assigned to the left side result like a [source field with the type xstring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_xstring.htm).

The following can be specified for result:

-   A [variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvariable_glosry.htm "Glossary Entry") with the type x or xstring.
-   A [variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvariable_glosry.htm "Glossary Entry") with the type c or string.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm). The data type of the declared variable var is xstring.

Example

Bit expressions as the right side of assignments. The expressions can also be used directly as input parameters of the output methods.

DATA hex1 TYPE xstring VALUE '0123456789ABCDEF'.
DATA hex2 TYPE xstring VALUE 'FEDCBA9876543210'.
FINAL(result1)  = hex1 BIT-AND hex2.
FINAL(result2)  = hex1 BIT-OR hex2.
cl\_demo\_output=>write(   result1 ).
cl\_demo\_output=>display( result2 ).