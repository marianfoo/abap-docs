  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Calculation Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomputing_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADD%2C%20THEN%2C%20UNTIL%2C%20ABAPADD_SEQUENCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADD, THEN, UNTIL

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd_then_from_shortref.htm)

Obsolete Syntax

ADD *{* *{* dobj1 THEN dobj2 UNTIL dobj
      *{* *{*TO result*}* *|* *{*GIVING result *\[*ACCORDING TO sel*\]**}* *}* *}*
    *|* *{* dobj FROM pos1 TO pos GIVING result *}* *}*
    *\[*RANGE range*\]*.

Effect

These variants of the statement [ADD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd.htm), which are forbidden in classes, adds strings of data objects that are stored in equal distances from one another in the memory.

-   In the variant with THEN and UNTIL, the string is defined by the distance between the data objects dobj1 and dobj2. At all memory positions whose distances to dobj1 are multiple values of this distance (up to and including the position dobj), [numeric data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_data_object_glosry.htm "Glossary Entry") with the same [technical type properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry") must be stored. The content of all these data objects is added. In the variant with TO, the total is added to the content of the data object result and the result is assigned to it. In the variant with GIVING, the total is directly assigned to the data object result. The data object result must be a numeric variable. If the addition ACCORDING is used, a data object of the string is added to the total only if its position in the string meets the condition in the [ranges table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenranges_table_glosry.htm "Glossary Entry") sel. The components low and high in the ranges table expect the data type i.
-   In the variant with TO and FROM, the string is formed by data objects directly adjacent in the memory, whose first data object is dobj and which must all have the same numeric data type. pos1 and pos expect data objects of the type i, whose values define a subset of the string. The content of the data objects of the substring is added and assigned to the data object result. The data object result must be a numeric variable. If pos1 or pos contain negative values or if pos1 is greater than pos, the statement is not executed, and result remains unchanged.

In both variants, an uncatchable exception is raised if addresses are accessed that do not contain suitable data objects.

All data objects of the string must be within a structure. If this is not known statically in the syntax check, a structure range with the addition RANGE must be specified. If the data objects of the string are not part of the specified structure when the statement is executed, an uncatchable exception is raised.

The [calculation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_type.htm) of the addition is, as usual, determined from the operands involved.

Hint

The function of these variants of the ADD statement depends on the structure of the working memory. Memory-based operations of this type should be avoided. They are not allowed in classes and can be replaced as required by the statement [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) with the addition [INCREMENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_dobj.htm).

Example

The components of the structure numbers specified on the [selection screen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_glosry.htm "Glossary Entry") are added and the total is assigned to variable sum.

DATA: BEGIN OF numbers,
        one   TYPE p LENGTH 8 DECIMALS 0 VALUE 10,
        two   TYPE p LENGTH 8 DECIMALS 0 VALUE 20,
        three TYPE p LENGTH 8 DECIMALS 0 VALUE 30,
        four  TYPE p LENGTH 8 DECIMALS 0 VALUE 40,
        five  TYPE p LENGTH 8 DECIMALS 0 VALUE 50,
      END OF numbers,
      sum     TYPE i.
SELECT-OPTIONS position FOR sum.
ADD numbers-one THEN numbers-two
                UNTIL numbers-five
                ACCORDING TO position
                GIVING sum.

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow in addition, type I in the additions UNTIL or FROM ... TO
    Runtime error: ADDF\_INT\_OVERFLOW
-   Cause: Overflow in arithmetic operation (type p)
    Runtime error: BCD\_OVERFLOW
-   Cause: Integer overflow in addition
    Runtime error: COMPUTE\_INT\_PLUS\_OVERFLOW

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in arithmetic operation (type p, with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW

Uncatchable Exceptions

-   Cause: Access to data outside of the range specified in the RANGE addition
    Runtime error: ADD\_FIELDS\_NOT\_IN\_RANGE
-   Cause: Invalid access to tables, strings, field references, or object references within the range specified by the addition RANGE.
    Runtime error: ADD\_FIELDS\_ILLEGAL\_ACCESS
-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA