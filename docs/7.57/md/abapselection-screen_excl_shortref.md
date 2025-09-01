  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECTION-SCREEN EXCLUDE, ABAPSELECTION-SCREEN_EXCL_SHORTREF, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECTION-SCREEN EXCLUDE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_version.htm)

Syntax

SELECTION-SCREEN EXCLUDE *{* *{*PARAMETERS parameter*}*
                         *|* *{*SELECT-OPTIONS selcrit*}*
                         *|* *{*RADIOBUTTON GROUPS group*}*
                         *|* *{*BLOCKS block*}*
                         *|* *{*IDS id*}* *}*.

Effect

Deletes the specified element from a version of the [standard selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") in a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Additions   

-   PARAMETERS parameter
    Removes a parameter parameter.
-   SELECT-OPTIONS selcrit
    Removes a [selection criterion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit.
-   RADIOBUTTON GROUPS group
    Removes a radio button group group.
-   BLOCKS block
    Removes a block block.
-   IDS id
    Removes all elements of the ID id.