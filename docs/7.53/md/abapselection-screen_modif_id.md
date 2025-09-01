  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Creating Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN - screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\)) → 

SELECTION-SCREEN - MODIF ID

[Quick Reference](javascript:call_link\('abapselection-screen_shortref.htm'\))

Syntax

... MODIF ID modid ...

Effect

After the MODIF ID addition, a modid identifier can be specified to assign a screen element of a selection screen to a [modification group](javascript:call_link\('abenmodification_group_glosry.htm'\) "Glossary Entry"). The MODIF ID addition can be specified for the following statements:

-   [SELECTION-SCREEN - COMMENT](javascript:call_link\('abapselection-screen_comment.htm'\))
    
-   [SELECTION-SCREEN - PUSHBUTTON](javascript:call_link\('abapselection-screen_pushbutton.htm'\))
    
-   [SELECTION-SCREEN - TAB](javascript:call_link\('abapselection-screen_tabbed.htm'\))
    
-   [SELECTION-SCREEN - ULINE](javascript:call_link\('abapselection-screen_uline.htm'\))
    
-   [PARAMETERS](javascript:call_link\('abapparameters.htm'\))
    
-   [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\))
    

The name of the modid modification group must be specified directly and must have no more than three characters. When generating a selection screen, modid is entered (for the properties of the screen elements created using the above statement) in the group which is assigned to the component group1 of the structure [SCREEN](javascript:call_link\('abenscreen.htm'\)). All screen elements of a group can be modified before displaying the selection screen together with the [MODIFY SCREEN](javascript:call_link\('abapmodify_screen.htm'\)) statement. Note

Note

The modification groups which are assigned to the group2 and group3 columns of the structure [SCREEN](javascript:call_link\('abenscreen.htm'\)), are set by the system when generating a selection screen.

-   group2 contains the value "DBS" for screen elements defined in a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").
    
-   group3 can contain values from the following table.
    
-   group4 is only intended for internal use.
    

Possible values in group3:

Key

Meaning of the screen element

BLK

Frame or title of a block

COF

Output field that uses the FOR FIELD addition to link to a parameter or [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry").

COM

Output field that is not linked to a parameter or a selection criterion.

HGH

Input field for the upper interval limit of a selection criterion

ISX

Input field for a parameter that is linked to a search help using the AS SEARCH PATTERN addition.

LOW

Input field for the lower interval limit of a selection criterion

OPU

Icon for the selection options of a selection criterion

PAR

Input field of a parameter

PBU

[Pushbutton](javascript:call_link\('abenpushbutton_glosry.htm'\) "Glossary Entry")

TAB

[Tab title](javascript:call_link\('abentab_title_glosry.htm'\) "Glossary Entry")

TOT

Output field for text before the input field of the upper interval limit of a selection criterion

TST

[Tabstrip](javascript:call_link\('abentabstrip_control_glosry.htm'\) "Glossary Entry")

TXT

Output field for text before the input field of a parameter or the lower interval limit of a selection criteria

ULI

Horizontal line

VPU

Pushbutton for multiple selection of a selection criterion

Example

The elements of the b2 block are assigned to the bl2 modification group. The show\_all checkbox enables the option of displaying these elements. The change in the display takes place immediately, since the event AT SELECTION-SCREEN is raised when the checkbox is selected. The function code is not needed. Instead, the content of show\_all is evaluated at [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry").

PARAMETERS show\_all AS CHECKBOX USER-COMMAND flag.
SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME.
PARAMETERS: p1 TYPE c LENGTH 10,
            p2 TYPE c LENGTH 10,
            p3 TYPE c LENGTH 10.
SELECTION-SCREEN END OF BLOCK b1.
SELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME.
PARAMETERS: p4 TYPE c LENGTH 10 MODIF ID bl2,
            p5 TYPE c LENGTH 10 MODIF ID bl2,
            p6 TYPE c LENGTH 10 MODIF ID bl2.
SELECTION-SCREEN END OF BLOCK b2.
AT SELECTION-SCREEN OUTPUT.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF show\_all <> 'X' AND
       screen\_wa-group1 = 'BL2'.
       screen\_wa-active = '0'.
    ENDIF.
    MODIFY SCREEN FROM screen\_wa.
  ENDLOOP.