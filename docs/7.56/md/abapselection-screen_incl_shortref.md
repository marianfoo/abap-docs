  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SELECTION-SCREEN INCLUDE - Short Reference

[Reference](javascript:call_link\('abapselection-screen_include.htm'\))

Syntax

SELECTION-SCREEN INCLUDE *{* *{* PARAMETERS parameter
                             *\[*OBLIGATORY *\[*OFF*\]**\]*
                             *\[*MODIF ID modid*\]* *}*
                         *|* *{* SELECT-OPTIONS selcrit
                             *\[*OBLIGATORY *\[*OFF*\]**\]*
                             *\[*NO INTERVALS *\[*OFF*\]**\]*
                             *\[*NO-EXTENSION *\[*OFF*\]**\]*
                             *\[*MODIF ID modid*\]* *}*
                         *|* *{* COMMENT *\[*/*\]**\[*pos*\]*(len) text
                             *\[*FOR FIELD sel*\]*
                             *\[*MODIF ID modid*\]* *}*
                         *|* *{* PUSHBUTTON *\[*/*\]**\[*pos*\]*(len) button\_text
                             *\[*USER-COMMAND fcode*\]*
                             *\[*MODIF ID modid*\]* *}*
                         *|* *{* BLOCKS block *}* *}*
                         *\[*ID id*\]*.

Effect

Inherits screen elements from a different [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").

Additions

-   [PARAMETERS parameter](javascript:call_link\('abapselection-screen_include_param.htm'\))
    Inherits the screen elements from a parameter parameter.
-   [SELECT-OPTIONS selcrit](javascript:call_link\('abapselection-screen_include_selop.htm'\))
    Inherits the screen elements from a [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") selcrit.
-   [COMMENT *\[*/*\]**\[*pos*\]*(len) text](javascript:call_link\('abapselection-screen_include_comnt.htm'\))
    Inherits an output field in the position specified in pos and len.
-   [PUSHBUTTON *\[*/*\]**\[*pos*\]*(len) button\_text *\[*USER-COMMAND fcode*\]*](javascript:call_link\('abapselection-screen_include_pushb.htm'\))
    Inherits a pushbutton in the position specified in pos and len. The [function code](javascript:call_link\('abenfunction_code_glosry.htm'\) "Glossary Entry") is either inherited or specified as fcode.
-   [BLOCKS block](javascript:call_link\('abapselection-screen_include_block.htm'\))
    Inherits a block block or a [tabstrip](javascript:call_link\('abentabstrip_control_glosry.htm'\) "Glossary Entry") area with all its elements.
-   [*\[*OBLIGATORY *\[*OFF*\]**\]* *\[*NO INTERVALS *\[*OFF*\]**\]* *\[*MODIF ID modid*\]* *\[*FOR FIELD sel*\]*](javascript:call_link\('abapselection-screen_include_selop.htm'\))
    Overwrites the corresponding properties of the inherited element.
-   [ID id](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))
    Defines an ID id with a maximum of three characters on a logical database for the inherited screen element.