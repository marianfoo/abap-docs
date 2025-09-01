  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

COLLECT - Quick reference

[Reference](javascript:call_link\('abapcollect.htm'\))

Syntax

COLLECT wa INTO itab *{* *\[*ASSIGNING <fs> *\[*CASTING*\]**\]*
                     *|* *\[*REFERENCE INTO dref*\]* *}*.

Effect

Inserts work areas wa as rows in an internal table itab. Here, the primary table key already exists for some rows and the values of the remaining components are added to the values of the existing rows.

Additions

-   [ASSIGNING <fs> *\[*CASTING*\]*](javascript:call_link\('abapcollect_itab_result.htm'\))
    Assigns the inserted row to the field symbol <fs>. A [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") can be performed here.
    
-   [REFERENCE INTO dref](javascript:call_link\('abapcollect_itab_result.htm'\))
    The data reference in dref is set to the inserted row.