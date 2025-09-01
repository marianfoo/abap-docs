  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  A

ASSIGN - LOCAL COPY - Quick reference

[Reference](javascript:call_link\('abapassign_local_copy.htm'\))

Syntax

ASSIGN LOCAL COPY
  OF *{* *{**\[*INITIAL*\]* *{* dobj*\[*+off*\]**\[*(len)*\]*
                  *|* (name)
                  *|* oref->(attr\_name)
                  *|* *{*class*|*(class\_name)*}*\=>*{*attr*|*(attr\_name)*}*
                  *|* dref->\* *}* *}*
     *|* *{*INITIAL LINE OF *{*itab*|*(itab\_name)*}**}* *}*
  TO <fs>
  *\[*CASTING ...*\]*.

Effect

Obsolete: In a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), creates a local [anonymous data object](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") as a copy of a memory area and assigns it to the field symbol <fs>.

Additions

Specifies the memory area:

-   Additions other than LINE OF - See [ASSIGN](javascript:call_link\('abapassign_shortref.htm'\)).
    
-   LINE OF itab*|*(itab\_name) - Copy of a row of an internal table itab.
    

Specifies the content:

-   INITIAL
    Initializes the anonymous data object. Otherwise, the content of the memory area is used.
    

Specifies the data type:

-   CASTING ...
    Specifies the data type used to handle the memory area. See [ASSIGN](javascript:call_link\('abapassign_shortref.htm'\)).