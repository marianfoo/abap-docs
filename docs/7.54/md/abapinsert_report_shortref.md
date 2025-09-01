  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  I

INSERT REPORT - Quick reference

[Reference](javascript:call_link\('abapinsert_report.htm'\))

Syntax

INSERT REPORT prog FROM itab
              *\[*MAXIMUM WIDTH INTO wid*\]*
              *{* *\[*KEEPING DIRECTORY ENTRY*\]*
              *|* *{* *\[*PROGRAM TYPE pt*\]*
                  *\[*FIXED-POINT ARITHMETIC fp*\]*
                  *\[*VERSION*|**{*UNICODE ENABLING*}* vs*\]* *}*
              *|* *\[*DIRECTORY ENTRY dir*\]* *}*.

Effect

Inserts the source code contained in the internal table itab as an ABAP program prog into the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry").

Additions

-   MAXIMUM WIDTH INTO wid
    Returns the number of characters of the longest source code line passed in wid.
    
-   KEEPING DIRECTORY ENTRY
    Preserves the properties of an existing program.
    
-   PROGRAM TYPE pt
    The [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") is specified by pt.
    
-   FIXED-POINT ARITHMETIC fp
    Defines fixed point arithmetic by specifying " " or "X" in fp.
    
-   VERSION vs
    Defines the [ABAP language version](javascript:call_link\('abenabap_versions.htm'\)) by specifying the version ID in vs.
    
-   UNICODE ENABLING vs
    Obsolete: Works like VERSION vs.
    
-   DIRECTORY ENTRY dir
    The [program properties](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") are specified by the entries in the structure dir of the type TRDIR.