  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros.htm) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_help.htm) → 

dynpro - Field Help

There are three ways of displaying field help for screen elements on dynpros:

-   [Displaying the Documentation of the Data Element](#@@ITOC@@ABENABAP_DYNPROS_FIELD_HELP_1)

-   [Displaying the Supplement Documentation of the Data Element](#@@ITOC@@ABENABAP_DYNPROS_FIELD_HELP_2)

-   [Calling Help Texts in Dialog Modules](#@@ITOC@@ABENABAP_DYNPROS_FIELD_HELP_3)

Displaying the Documentation of the Data Element

If a screen element in Screen Painter was defined by taking a field from ABAP Dictionary, the [documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements_sema.htm) of the associated data element is displayed automatically when the F1 help is selected for this field (unless this step is overridden in the dynpro flow logic).

Displaying the Supplement Documentation of the Data Element

The documentation of some data elements has additional [supplement documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements_sema.htm). Supplement documentation for a dynpro field is created in Screen Painter and not in ABAP Dictionary in ABAP Workbench. Here, the supplement documentation is defined for the data element using a number.

Supplement documentation of this type is specific to a program and to a dynpro. Any supplement documentation with the same number defined in ABAP Dictionary is overridden by any dynpro-specific supplement documentation. Supplement documentation defined in ABAP Dictionary can still be associated with a dynpro field in table THLPF. This requires a new line in table THLPF containing the program name, dynpro number, field name, and the number of the supplement documentation.

To be able to display the supplement documentation, the dynpro flow logic must respond to the POH event as follows:

PROCESS ON HELP-REQUEST.
...
  [FIELD field \[MODULE mod\] WITH hlp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynp_field_help.htm).
  ...

Only [FIELD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpfield.htm) statements are allowed after [PROCESS ON HELP-REQUEST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpprocess.htm). If the flow logic of a dynpro does not contain the event keyword PROCESS ON HELP-REQUEST, F1 displays either the data element documentation of the field with the cursor or no help documentation is displayed. In other cases, the following FIELD statement is executed whose field field has the cursor.

If dynpro-specific supplement documentation exists for the field field, this is displayed by its number hlp being specified. A variable hlp can be filled before the help is displayed, for example, by calling the dialog module mod. At the event PROCESS ON HELP-REQUEST, the FIELD statement does not, however, transport the content of the dynpro field field to the ABAP program.

Calling Help Texts in Dialog Modules

Any help text can be displayed by calling dialog modules at POH:

PROCESS ON HELP-REQUEST.
  ...
  [FIELD field MODULE mod.](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynp_field_help.htm)
  ...

After [PROCESS ON HELP-REQUEST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynpprocess.htm), the MODULE statement can only be used in combination with the FIELD statement. When F1 is selected, the dialog module mod of the FIELD statement whose field field has the cursor. If multiple FIELD statements are specified for the same field field, only the first statement is executed. The dialog module mod does not provide the content of the dynpro field field, since this content is not transported by the FIELD statement at PROCESS ON HELP-REQUEST time.

The dialog module mod is defined like a regular PAI module in the ABAP program. The processing logic of the module must ensure that adequate help is displayed for the field in question. Function modules such as HELP\_OBJECT\_SHOW\_FOR\_FIELD or HELP\_OBJECT\_SHOW can be used to do this.

Executable Example

[Field Help](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_f1_help_abexa.htm)