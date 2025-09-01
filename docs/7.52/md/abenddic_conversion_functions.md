  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_functions.htm) →  [Special Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_special_functions.htm) → 

Conversion Functions

The following table shows the conversion functions supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The last two columns indicate where a function can be used.

SQL Function

Result

ABAP CDS

Open SQL

FLTP\_TO\_DEC( arg AS dtype )

Conversion of an argument of type FLTP to a packed number.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm)

\-

BINTOHEX(arg)

Converts an argument of the type RAW to a string of the type CHAR.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm)

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_type_conv_func.htm)

HEXTOBIN(arg)

Converts an argument of the type CHAR or NUMC to a byte string of the type RAW.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm)

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_type_conv_func.htm)

UNIT\_CONVERSION( p1 => a1, p2 => a2, ... )

Conversion of units.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_unit_curr.htm)

\-

CURRENCY\_CONVERSION( p1 => a1, p2 => a2, ... )

Conversion of currencies.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_unit_curr.htm)

\-

DECIMAL\_SHIFT( p1 => a1, p2 => a2, ... )

Setting the decimal separator.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_unit_curr.htm)

\-

Descriptions of the potential operands and data types and how they work can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conversion_functions.htm) and [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_conversion_functions.htm).