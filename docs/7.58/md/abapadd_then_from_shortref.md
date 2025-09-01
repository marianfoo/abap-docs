  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  A

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADD%2C%20THEN%2C%20UNTIL%2C%20ABAPADD_THEN_FROM_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADD, THEN, UNTIL - Short Reference

[Reference](javascript:call_link\('abapadd_sequences.htm'\))

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
    Limits the elements of the sequence according to the conditions of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry").
-   RANGE range
    Limits the addressable memory area to a structure range.