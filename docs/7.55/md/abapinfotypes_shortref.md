  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  I

INFOTYPES - Quick reference

[Reference](javascript:call_link\('abapinfotypes.htm'\))

Syntax

INFOTYPES nnnn *\[*NAME name*\]*
               *\[*OCCURS n*\]*
               *\[*MODE N*\]*
               *\[*VALID FROM intlim1 TO intlim2*\]*
               *\[*AS PERSON TABLE*\]*.

Effect

Special Statement:
Creates an internal table with the name pnnnn for an infotype of the SAP ERP component HR.

Additions

-   nnnn
    Four-digit, numeric key of an info type.
    

-   NAME name
    Defines the name of the internal table as name.
    

-   OCCURS n
    Defines the initial memory usage of the internal table.
    

-   MODE N
    Prevents linking to special [logical databases](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").
    

-   VALID FROM intlim1 TO intlim2
    Creates the columns intlim1 and intlim2 for the obsolete abbreviated form of [PROVIDE](javascript:call_link\('abapprovide_obsolete.htm'\)) as interval limits.
    

-   AS PERSON TABLE
    Creates the name of the internal table as ppnnnn.