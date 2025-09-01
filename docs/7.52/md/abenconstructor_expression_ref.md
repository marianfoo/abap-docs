---
title: "REF - Reference Operator"
description: |
  Syntax ... REF type( dobj  table_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm) ) ... Alternatives: 1. ... REF type( dobj )(#!ABAP_ALTERNATIVE_1@1@) 2. ... REF type( table_exp )(#!ABAP_ALTERNATIVE_2@2@) Effect A constructor expression(https:/
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_ref.htm"
abapFile: "abenconstructor_expression_ref.htm"
keywords: ["do", "if", "try", "class", "data", "types", "internal-table", "abenconstructor", "expression", "ref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Reference Variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_references.htm) → 

REF - Reference Operator

Syntax

... REF type( dobj *|* [table\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm) ) ...

Alternatives:

[1\. ... REF type( dobj )](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... REF type( table\_exp )](#!ABAP_ALTERNATIVE_2@2@)

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expressions.htm) with the reference operator REF creates either a [data reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") that points to the argument dobj or controls a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm).

Existing data objects and table expressions can be specified as an argument, but no further expressions or function calls.

Alternative 1

... REF type( dobj )

Effect

If a data object dobj is specified as an argument, the operator REF works like the statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_reference.htm) and creates a [data reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") as a result. This variable points to the specified data object dobj. type determines the [static type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the result. The following can be specified for type:

-   A non-generic data type dtype that follows the rules of [up casts in data references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_references_data.htm).

-   The generic data type [data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_generic.htm).

-   The # character for a data type, determined in accordance with the following hierarchy:

-   If the data type required in an operand position is unique and known completely, the [operand type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperand_type_glosry.htm "Glossary Entry") is used.

-   If the operand type cannot be derived from the context, the data type of dobj is used.

-   If the data type of dobj is not known statically, the generic type [data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_generic.htm) is used.

The parentheses must contain precisely one unnamed argument dobj. If offsets/lengths ([+off(len)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm)) are specified, the data type dobj here cannot be string or xstring.

Notes

-   The conversion operator REF is suitable for avoiding declarations of helper variables only needed, for example, to specify data reference variables as actual parameters.

-   No empty parentheses can be specified after REF.

Example

Fills an internal table with the value operator VALUE, where the component dref is given a value using REF. This is an excerpt from the [executable example for the class CL\_ABAP\_BROWSER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhtml_browser_abexa.htm). Other uses can be found in the executable [examples of ADBC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_abexas.htm), where parameter bindings are used.

TYPES pict\_line(1022) TYPE x.
DATA  pict     TYPE STANDARD TABLE OF pict\_line WITH EMPTY KEY.
DATA  ext\_data TYPE cl\_abap\_browser=>load\_tab.
ext\_data = VALUE #( ( name = 'PICT.GIF'
                      type = 'image'
                      dref = REF #( pict ) ) ).

Alternative 2

... REF type( tab\_exp )

Effect

If a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm) is specified as an argument, the operator REF controls the category of its result and enables a default value to be specified for unfound rows, as described in the related [section](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_result.htm).

Example

The result of the operator REF is a data reference variable, which references the fifth row of the internal table itab.

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i >= 10 ( i \* 10 ) ).
DATA(dref) = REF #( itab\[ 5 \] ).
cl\_demo\_output=>display( dref->\* ).