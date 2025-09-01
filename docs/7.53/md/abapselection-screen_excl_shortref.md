  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SELECTION-SCREEN EXCLUDE - Quick reference

[Reference](javascript:call_link\('abapselection-screen_ldb_version.htm'\))

Syntax

SELECTION-SCREEN EXCLUDE *{* *{*PARAMETERS parameter*}*
                         *|* *{*SELECT-OPTIONS selcrit*}*
                         *|* *{*RADIOBUTTON GROUPS group*}*
                         *|* *{*BLOCKS block*}*
                         *|* *{*IDS id*}* *}*.

Effect

Deletes the specified element from a version of the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") in a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

Additions

-   PARAMETERS parameter
    Removes a parameter parameter.
    
-   SELECT-OPTIONS selcrit
    Removes a [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") selcrit.
    
-   RADIOBUTTON GROUPS group
    Removes a radio button group group.
    
-   BLOCKS block
    Removes a block block.
    
-   IDS id
    Removes all elements of the ID id.