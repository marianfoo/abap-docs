  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  A

ADD, THEN, UNTIL - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapadd_sequences.htm)

Syntax

ADD *{* *{* dobj1 THEN dobj2 UNTIL dobj
      *{* *{*TO result*}* *|* *{*GIVING result *\[*ACCORDING TO sel*\]**}* *}* *}*
    *|* *{* dobj FROM pos1 TO pos GIVING result *}* *}*
    *\[*RANGE range*\]*.

Effect

Obsolete: Adds sequences of data objects saved at equal distances from each other in the memory.

Additions

-   THEN ... UNTIL
    Defines the sequence using the distance between the data objects dobj1 and dobj2.
-   TO result
    Adds the result to the content of result.
-   GIVING result
    Assigns the result to result.
-   FROM ... TO
    Defines the sequence using data objects directly adjacent in the memory whose first data object is dobj and whose elements are determined using pos1 and pos.
-   ACCORDING TO sel
    Limits the elements of the sequence according to the conditions of a [ranges table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenranges_table_glosry.htm "Glossary Entry").
-   RANGE range
    Limits the addressable memory area to a structure range.