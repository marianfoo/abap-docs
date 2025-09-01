  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 3.0](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-30.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Further%20Changes%20in%20ABAP%20Release%203.0%2C%20ABENNEWS-30-OTHER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Further Changes in ABAP Release 3.0

[1\. SET TITLEBAR with Numbered Variables](#!ABAP_MODIFICATION_1@1@)
[2\. New Additions for LEAVE: LEAVE PROGRAM, LEAVE LIST-PROCESSING](#!ABAP_MODIFICATION_2@2@)
[3\. New Language Element CONTINUE for Continuing a Loop](#!ABAP_MODIFICATION_3@3@)
[4\. Editing ABAP Text Elements](#!ABAP_MODIFICATION_4@4@)
[5\. ASSIGN COMPONENT with Component Name](#!ABAP_MODIFICATION_5@5@)
[6\. User Interface for Entering Dynamic Selections](#!ABAP_MODIFICATION_6@6@)
[7\. New Addition OR fld for the WHEN Statement](#!ABAP_MODIFICATION_7@7@)

Modification 1   

SET TITLEBAR with Numbered Variables

[SET TITLEBAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_titlebar_dynpro.htm) now also replaces the variables &1 ... &9.

Modification 2   

New Additions for LEAVE: LEAVE PROGRAM, LEAVE LIST-PROCESSING

The new additions [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_program.htm) and [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_list-processing.htm) for LEAVE now make it possible to control the flow precisely when leaving processing.

Modification 3   

New Language Element CONTINUE for Continuing a Loop

[CONTINUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontinue.htm) terminates the current pass through a DO, WHILE, LOOP, or SELECT loop. However, the loop is not exited as in [EXIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexit_loop.htm), but continues with the next loop element, as is the case when using [CHECK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcheck_loop.htm).

Modification 4   

Editing ABAP Text Elements

The term numbered texts has been changed to text symbols. Until now a text symbol had an implicit length, calculated by comparing the text from the right until the first character not a blank.

Due to translation difficulties (a text may sometimes need more space in a foreign language than in the original language), it became necessary to define the length explicitly. Here, the same process was chosen as already used for Screen Painter transactions. The underscore (\_) allows you to vary the length for each entry. The underscore itself, however, is replaced by a blank before saving. As a result, underscores cannot be used in text symbols. In change mode, underscores (and therefore the internal length) are visible. In display mode, the text symbols are displayed as saved (without underscores).

The Text Comparison function displays the text symbols in their defined lengths. Trailing blanks are shown as underscores.

For all [screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry"), the function Print has been added to the Text Elements menu. This function can be used to print a list of the required text elements, dependent on context.

Modification 5   

ASSIGN COMPONENT with Component Name

[ASSIGN COMPONENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign.htm) now handles the next field as a component name and not as a component number, if the field is of type C or has a structure that contains no internal table.

Modification 6   

User Interface for Entering Dynamic Selections

You can use the function modules FREE\_SELECTIONS\_INIT and FREE\_SELECTIONS\_DIALOG to create a dialog for entering selections for any database fields. The selections entered by the user are returned in several different forms, for example, as tables with WHERE clauses that can be passed directly to a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement.

Modification 7   

New Addition OR fld for the WHEN Statement

The addition OR fld can now be used to define any number of comparison values for the [WHEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhen.htm) statement.