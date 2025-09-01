  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SELECTION-SCREEN - Quick reference

[Reference](javascript:call_link\('abapselection-screen.htm'\))

Syntax

SELECTION-SCREEN  *{* *{* COMMENT *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)
                      *{* text *|* *{**\[*text*\]* FOR FIELD sel*}* *}*
                      *\[*VISIBLE LENGTH vlen*\]*
                      *\[*MODIF ID modid*\]* *}*
                  *|* *{* FUNCTION KEY n *}*
                  *|* *{* POSITION *{*pos*|*POS\_LOW*|*POS\_HIGH*}* *}*
                  *|* *{* PUSHBUTTON *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)
                      button\_text USER-COMMAND fcode
                      *\[*VISIBLE LENGTH vlen*\]*
                      *\[*MODIF ID modid*\]* *}*
                  *|* *{* SKIP *\[*n*\]* *}*
                  *|* *{* ULINE *\[**\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)*\]*
                      *\[*MODIF ID modid*\]* *}* *}*
                  *\[*FOR *{*TABLE*|*NODE*}* node *\[*ID id*\]**\]*.

Effect

Creates basic screen elements on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").

Additions

-   [COMMENT text *|* *{**\[*text*\]* FOR FIELD sel*}*](javascript:call_link\('abapselection-screen_comment.htm'\))
    Creates an output field with the text text that can be assigned to a parameter or a [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") sel.
    
-   [FUNCTION KEY n](javascript:call_link\('abapselection-screen_functionkey.htm'\))
    Activates one of the predefined pushbuttons with the [function codes](javascript:call_link\('abenfunction_code_glosry.htm'\) "Glossary Entry") "FC01" to "FC05" in the [application toolbar](javascript:call_link\('abenapplication_toolbar_glosry.htm'\) "Glossary Entry").
    
-   [POSITION *{*pos*|*POS\_LOW*|*POS\_HIGH*}*](javascript:call_link\('abapselection-screen_line.htm'\))
    Positions the following screen element within a line.
    
-   [PUSHBUTTON button\_text USER-COMMAND fcode](javascript:call_link\('abapselection-screen_pushbutton.htm'\))
    Creates a pushbutton with the text button\_text and the function code fcode.
    
-   [SKIP *\[*n*\]*](javascript:call_link\('abapselection-screen_skip.htm'\))
    Creates one or n blank lines.
    
-   [ULINE](javascript:call_link\('abapselection-screen_uline.htm'\))
    Creates a horizontal line.
    
-   [*\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)](javascript:call_link\('abapselection-screen_uline.htm'\))
    Specifies the position of the screen element.
    
-   VISIBLE LENGTH vlen
    Defines the visible length of the screen element as vlen.
    
-   [MODIF ID modid](javascript:call_link\('abapselection-screen_modif_id.htm'\))
    Assigns the screen element to the [modifiation group](javascript:call_link\('abenmodification_group_glosry.htm'\) "Glossary Entry") modid.
    
-   [FOR *{*TABLE*|*NODE*}* node](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))
    Obsolete: Assigns the screen element in a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") to a node node of the associated structure.
    
-   [ID id](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))
    Obsolete: Defines a maximal three-figure identification ID for the screen element in a logical database.