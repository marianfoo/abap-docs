  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) → 

Assignments, Calculations, and Other Types of Data Access

An assignment passes the content of a data object, a return value, or a result of a calculation expression to a data object. If the data types are compatible, the content is copied unchanged. If the data types are incompatible and there is a suitable conversion rule, the content is converted. An assignment is usually performed with the [assignment operator (\=)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_operator.htm).

A calculation is executed in a calculation expression, which can be specified in an operand position, in particular on the right side of the assignment operator \=. If necessary, the result of a calculation expression is converted to the data type of the operand position or of the result of the assignment. In arithmetic expressions, the calculation is executed in a calculation type based on the data types of all operands including the result.

-   [Assignments Between Different Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassignemnt_diff_types_guidl.htm "Guideline")
-   [Avoiding Invalid Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenavoiding_invalid_values_guidl.htm "Guideline")
-   [Using Conversion Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_conversion_rules_guidl.htm "Guideline")
-   [Trailing Blanks in Character Literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentrailing_blanks_literals_guidl.htm "Guideline")
-   [Specifying Numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennumbers_guidl.htm "Guideline")
-   [Selecting the Numeric Type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_numeric_type_guidl.htm "Guideline")
-   [Rounding Errors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrounding_error_guidl.htm "Guideline")
-   [Dividing by Zero](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendivision_zero_guidl.htm "Guideline")
-   [Casting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencasting_guidl.htm "Guideline")
-   [Runtime Errors When Accessing Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_data_obj_guidl.htm "Guideline")
-   [Anonymous Containers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunknown_container_guidl.htm "Guideline")
-   [Pass by Reference of Global Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenref_transf_global_data_guidl.htm "Guideline")

Continue
[Assignments Between Different Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassignemnt_diff_types_guidl.htm)
[Avoiding Invalid Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenavoiding_invalid_values_guidl.htm)
[Using Conversion Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_conversion_rules_guidl.htm)
[Trailing Blanks in Character Literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentrailing_blanks_literals_guidl.htm)
[Specifying Numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennumbers_guidl.htm)
[Selecting the Numeric Type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_numeric_type_guidl.htm)
[Rounding Errors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrounding_error_guidl.htm)
[Division by Zero](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendivision_zero_guidl.htm)
[Casting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencasting_guidl.htm)
[Runtime Errors When Accessing Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_data_obj_guidl.htm)
[Anonymous Containers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunknown_container_guidl.htm)
[Pass by Reference of Global Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenref_transf_global_data_guidl.htm)