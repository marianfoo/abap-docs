---
title: "REF, Reference Operator"
description: |
  Syntax ... REF type( dobj  table_exp(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) ) ... Alternatives: 1. ... REF type( dobj )(#!ABAP_ALTERNATIVE_1@1@) 2. ... REF type( table_exp )(#!ABAP_ALTERNATIVE_2@2@) Effect A constructor expression(ht
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm"
abapFile: "abenconstructor_expression_ref.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "internal-table", "abenconstructor", "expression", "ref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_assignments.htm) →  [Assigning Reference Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenset_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REF%2C%20Reference%20Operator%2C%20ABENCONSTRUCTOR_EXPRESSION_REF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REF, Reference Operator

Syntax

... REF type( dobj *|* [table\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) ) ...

Alternatives:

[1\. ... REF type( dobj )](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... REF type( table\_exp )](#!ABAP_ALTERNATIVE_2@2@)

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expressions.htm) with the reference operator REF creates either a [data reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") that points to the argument dobj or controls a [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm).

Existing data objects and table expressions can be specified as an argument, but no other expressions or function calls.

Alternative 1   

... REF type( dobj )

Effect

If a data object dobj is specified as an argument, the operator REF works like the statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_reference.htm) and creates a [data reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") as a result that points to the specified data object dobj. type determines the [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the result. The following can be specified for type:

-   A non-generic data type dtype that satisfies the rules of [upcasts in data references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_references_data.htm).
-   The generic data type [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm).
-   The # character for a data type that is determined by the following hierarchy:
    -   If the data type required in an operand position is unique and known completely, the [operand type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperand_type_glosry.htm "Glossary Entry") is used.
    -   If the operand type cannot be derived from the context, the data type of dobj is used.
    -   If the data type of dobj is not known statically, the generic type [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) is used.

The parentheses must contain exactly one unnamed argument dobj. If offsets/lengths ([+off(len)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm)) are specified, the data type dobj here cannot be string or xstring.

Hints

-   The conversion operator REF is suitable for avoiding declarations of helper variables that are only necessary, for example, to specify data reference variables as actual parameters.
-   No empty parentheses can be specified after REF.

Example

Filling of an internal table with the value operator VALUE, where the component dref is given a value using REF. This is an excerpt from the [executable example for the class CL\_ABAP\_BROWSER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhtml_browser_abexa.htm). Other use cases can be found in the executable [examples of ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_abexas.htm), where parameter bindings are used.

TYPES pict\_line(1022) TYPE x.
DATA  pict     TYPE STANDARD TABLE OF pict\_line WITH EMPTY KEY.
DATA  ext\_data TYPE cl\_abap\_browser=>load\_tab.
ext\_data = VALUE #( ( name = 'PICT.GIF'
                      type = 'image'
                      dref = REF #( pict ) ) ).

Alternative 2   

... REF type( tab\_exp )

Effect

If a [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) is specified as an argument, the operator REF controls the type of its result and enables a default value to be specified for unfound lines, as described in the related [section](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_result.htm).

Example

The result of the operator REF is a data reference variable that points to the fifth line of the internal table itab.

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i >= 10 ( i \* 10 ) ).
FINAL(dref) = REF #( itab\[ 5 \] ).
cl\_demo\_output=>display( dref->\* ).