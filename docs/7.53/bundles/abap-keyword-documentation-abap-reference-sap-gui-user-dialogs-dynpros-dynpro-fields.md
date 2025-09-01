# ABAP Keyword Documentation / ABAP − Reference / SAP GUI User Dialogs / Dynpros / Dynpro Fields

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_dynpros_fields.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_fields.htm)
- [abendynpro_field_abexas.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_abexas.htm)
- [abendynpro_in_out_field_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_in_out_field_abexa.htm)
- [abendynpro_dict_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_dict_abexa.htm)
- [abendynpro_push_button_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_push_button_abexa.htm)
- [abendynpro_radio_button_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_radio_button_abexa.htm)
- [abendynpro_strings_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_strings_abexa.htm)

**Bundle Contains**: 7 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.236Z

---

### abenabap_dynpros_fields.htm

> **📖 Official SAP Documentation**: [abenabap_dynpros_fields.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_fields.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) → 

Dynpro Fields

The [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") does not contain any data declarations. With the exception of the [OK field](javascript:call_link\('abenok_field_glosry.htm'\) "Glossary Entry") created when the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") itself is created, all other data objects of a dynpro (dynpro fields) created when the screen elements are defined in Layout Editor are assigned to the latter. The technical attributes length and data type of a dynpro field are determined by the element attributes defLg and Format. The data types of dynpro fields are determined either by reference to [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) from ABAP Dictionary (except CLNT and FLTP) or by reference to global fields of the ABAP program. In Layout Editor you can copy fields from ABAP Dictionary or the ABAP program, in which case name, length and data type of the dynpro fields are automatically defined in a matching way. All elementary data types except [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") are possible.

After [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") and before the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is sent, there is a data transport of global data objects for the respective ABAP program to dynpro fields of the same name. After a user action on the screen, and before or during [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") editing, the data transport takes place in the reverse order.

At PBO time, all dynpro fields are transported at the end of PBO processing, with the exception of fields that are defined in table controls or in [step loops](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry"). The latter are processed in loops in the flow logic and transported from the ABAP program to the dynpro after each loop execution. At PAI time, first the content of all dynpro fields that do not belong to any [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") or step loop and are not specified in any [FIELD](javascript:call_link\('dynpfield.htm'\)) statement are transported into the fields with the same name in the ABAP program. The contents of the fields of a table control or step loop are transported to the ABAP program row by row or group by group at the beginning of the respective loop run. The fields that are specified in the FIELD statements of the dynpro flow logic are transported upon execution of the corresponding FIELD statement.

Input and output fields must have a unique name (element attribute Name). Pure display elements such as text fields or frames are not associated with dynpro fields and do not necessarily need a unique name. When you create input and output fields by using fields from ABAP Dictionary, the system usually also creates field labels using texts from the dictionary. The default name for these text fields is the same name as the dynpro fields of the input and output fields.

Apart from the dynpro fields defined in Screen Painter, a dynpro also knows the [system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") of the ABAP program. In contrast to the program, these system fields are exclusively addressed as syst-name.

Notes

-   When dynpro fields are defined with reference to [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") in ABAP Dictionary, the global data objects with the same name of the ABAP program must be declared with the statement [TABLES](javascript:call_link\('abaptables.htm'\)) as [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry"). Otherwise, there will be no data transport.

-   The attributes of dynpro fields that have not been created by copying from the program or ABAP Dictionary must be set in Screen Painter. In particular, the name of the [OK field](javascript:call_link\('abenok_field_glosry.htm'\) "Glossary Entry") must be determined for every dynpro, so that the dynpro field will actually be analyzed by the runtime environment.

-   When dynpro fields with character-like dictionary type are passed, lowercase letters are transformed to uppercase letters by default. This behavior can be overridden in Screen Painter. Furthermore, [lowercase letters](javascript:call_link\('abenddic_domains_sema.htm'\)) can be preserved for data elements in the semantic attributes of a domain.

-   When dynpro fields are received from input fields on the screen, input fields are templates that expect a certain format depending on the data type of the underlying dynpro field. When passed to the dynpro field, the input is converted to a value of the appropriate type. This also means that some characters function as special characters by default.

-   The "!" character in the initial position of an input field on the screen deletes all characters in the field before the data transport.

-   The "=" character in the initial position of an input field on the screen initiates a search using [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry").

-   If an input field contains only blanks and "\_" characters, the latter are transported as blanks.

To deactivate the template and also the modifying effect of special characters, the attribute Without Template can be activated in Screen Painter. However, the template cannot be deactivated for [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").

-   If the type of the dynpro field is a numeric type defined in ABAP Dictionary, the attribute sign must be set for the type attribute, so that negative numbers can be displayed on the screen. This setting is only possible for [domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") and not for specifying a built-in type directly for [data elements](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") or structure components. If a negative number is enters in an input field, although the property is not set, the number is returned with an error message. If the associated ABAP data object when the dynpro is called contains a negative number, a non-handleable exception is raised.

-   On the screen, the content of dynpro fields is displayed as character-like. This means that the displayed value may differ from the internal representation. This applies in particular for the display of initial values. On the screen, all initial fields apart from those of type STRING or SSTRING are filled with blanks, while internally they contain a type-dependent initial value. Initial fields of type STRING and SSTRING are empty on the screen, which means that the cursor cannot be moved within the output length.

-   To enable explicit data transports between an ABAP program and dynpro fields, function modules such as DYNP\_UPDATE\_FIELDS are used.

-   ABAP fields of types string or xstring can be bound to dynpro fields of the same name, just like fields of fixed length. However, note that there are no dynpro fields of variable length. The length of a dynpro field is always defined in Screen Painter by the element attribute defLg. In data transports between strings in the ABAP program and dynpro fields of the same names, dynpro fields behave like target or source fields of fixed length, independent of their data type, and the respective [conversion rules](javascript:call_link\('abenconversion_elementary.htm'\)) apply, especially the following:

-   If, during the transport of a character string or byte string to a dynpro field, the string contains more characters than the length of the dynpro field, any surplus characters or bytes are cut off. Since a dynpro field may not exceed 132 characters of length, only up to 132 characters or bytes of a character string or byte string may be transported to the dynpro.

-   When transporting a character-like dynpro field to the ABAP program, trailing blanks are ignored.

These limitations apply to transports between normal input/output fields, fields in Table Controls, and in Drop Down-Boxes.

-   For special handling of [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"), refer to [Decimal Floating Point Numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)).

-   For special handling of fields of the type CURR, refer to [Currency Fields](javascript:call_link\('abenddic_currency_field.htm'\)).

-   For special handling of fields of the type QUAN, refer to [Quantity Fields](javascript:call_link\('abenddic_quantity_field.htm'\)).

Continue
[Dynpro Fields - Examples](javascript:call_link\('abendynpro_field_abexas.htm'\))



**📖 Source**: [abenabap_dynpros_fields.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_fields.htm)

### abendynpro_field_abexas.htm

> **📖 Official SAP Documentation**: [abendynpro_field_abexas.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Dynpro Fields](javascript:call_link\('abenabap_dynpros_fields.htm'\)) → 

Dynpro Fields - Examples

Continue
![Example](exa.gif "Example") [Screens, Processing Input and Output Fields](javascript:call_link\('abendynpro_in_out_field_abexa.htm'\))
![Example](exa.gif "Example") [Dynpros, Fields with Reference to ABAP Dictionary](javascript:call_link\('abendynpro_dict_abexa.htm'\))
![Example](exa.gif "Example") [Dynpros, Pushbuttons](javascript:call_link\('abendynpro_push_button_abexa.htm'\))
![Example](exa.gif "Example") [Dynpros, Checkboxes, and Radio Buttons](javascript:call_link\('abendynpro_radio_button_abexa.htm'\))
![Example](exa.gif "Example") [Dynpros, Strings](javascript:call_link\('abendynpro_strings_abexa.htm'\))



**📖 Source**: [abendynpro_field_abexas.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_abexas.htm)

### abendynpro_in_out_field_abexa.htm

> **📖 Official SAP Documentation**: [abendynpro_in_out_field_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_in_out_field_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Dynpro Fields](javascript:call_link\('abenabap_dynpros_fields.htm'\)) →  [Dynpro Fields - Examples](javascript:call_link\('abendynpro_field_abexas.htm'\)) → 

Screens, Processing Input and Output Fields

The example shows how to process screen fields local in the program.

Source Code

PROGRAM demo\_dynpro\_input\_output.
DATA: input  TYPE i,
      output TYPE i,
      radio1(1) TYPE c, radio2(1) TYPE c, radio3(1) TYPE c,
      box1(1) TYPE c, box2(1) TYPE c, box3(1) TYPE c.
CALL SCREEN 100.
MODULE init\_screen\_100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
  CLEAR input.
  radio1 = 'X'.
  CLEAR: radio2, radio3.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  IF sy-ucomm = 'CANCEL'.
    LEAVE PROGRAM.
  ENDIF.
  output = input.
  box1 = radio1.
  box2 = radio2.
  box3 = radio3.
ENDMODULE.

Description

The static next screen number of screen 100 is 100. The screen fields of output, box1, box2, and box3 have been defined as not ready for input in Screen Painter. The length of input is specified so that the user can enter a nine-digit integer without thousands separators. However, the display in the output field contains up to two thousands separators. If the length of input had remained 11 digits, a runtime error could occur if users do not set thousand separators. The user entries in the input fields are passed to the ABAP program in the PAI event raised by ENTER and then assigned to the output fields in the dialog module user\_command\_100. The next time the screen appears, the screen fields contain the appropriate values. The input fields are set in the dialog module init\_screen\_100 in the event PBO.



**📖 Source**: [abendynpro_in_out_field_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_in_out_field_abexa.htm)

### abendynpro_dict_abexa.htm

> **📖 Official SAP Documentation**: [abendynpro_dict_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_dict_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Dynpro Fields](javascript:call_link\('abenabap_dynpros_fields.htm'\)) →  [Dynpro Fields - Examples](javascript:call_link\('abendynpro_field_abexas.htm'\)) → 

Dynpros, Fields with Reference to ABAP Dictionary

The example shows how dynpro fields can be associated with ABAP Dictionary.

Source Code

PROGRAM demo\_dynpro\_dictionary .
TABLES demo\_conn.
DATA wa\_spfli TYPE spfli.
CALL SCREEN 100.
MODULE init\_screen\_100 OUTPUT.
  CLEAR demo\_conn-mark.
  MOVE-CORRESPONDING wa\_spfli TO demo\_conn.
  CLEAR wa\_spfli.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  IF demo\_conn-mark = 'X'.
    LEAVE PROGRAM.
  ENDIF.
  MOVE-CORRESPONDING demo\_conn TO wa\_spfli.
  SELECT  SINGLE cityfrom, airpfrom, cityto, airpto,
                 fltime, deptime, arrtime
    FROM  spfli
    WHERE carrid = @wa\_spfli-carrid AND connid = @wa\_spfli-connid
    INTO  CORRESPONDING FIELDS OF @wa\_spfli.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The statement TABLES passes the components of the structure DEMO\_CONN from ABAP Dictionary. The structure DEMO\_CONN was especially created in ABAP Dictionary for dynpros of the flight data model. Apart from the components of the database table SPFLI, there is also a component MARK whose domain S\_FLAG only defines the fixed values " " and "X". On the dynpro, the ABAP Dictionary text for MARK is overwritten with "Cancel"; for all other fields the ABAP Dictionary fields are used. Some fields are no longer ready for input in Screen Painter. Users can enter values for the airline and flight number. In this process, the user is automatically assisted by the field and the input help and the valid value check against check tables of ABAP Dictionary. These checks are performed automatically before any dialog module is called in the ABAP program. It is not possible for the user to enter an airline not defined in the check table SCARR or to enter any flight numbers not matching the airlines defined in SPFLI, or to enter any values for MARK except " " and "X". Not all these checks need to be programmed in the ABAP program. The module user\_command\_0100 of the ABAP program reads additional values for the checked key from the database table SPFLI and sends them to the dynpro in the init\_screen\_100 event. The work area demo\_conn, declared using the statement TABLES is used as an interface, while the actual data from the database is edited in the work area wa\_spfli. If the user fills the Cancel field with "X", the program exits.



**📖 Source**: [abendynpro_dict_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_dict_abexa.htm)

### abendynpro_push_button_abexa.htm

> **📖 Official SAP Documentation**: [abendynpro_push_button_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_push_button_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Dynpro Fields](javascript:call_link\('abenabap_dynpros_fields.htm'\)) →  [Dynpro Fields - Examples](javascript:call_link\('abendynpro_field_abexas.htm'\)) → 

Dynpros, Pushbuttons

This example demonstrates how pushbuttons on dynpros can be processed.

Source Code

PROGRAM demo\_dynpro\_push\_button .
DATA: ok\_code TYPE sy-ucomm,
      save\_ok LIKE ok\_code,
      output(8) TYPE c.
CALL SCREEN 100.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'BUTTON\_EXIT'.
      LEAVE PROGRAM.
    WHEN 'BUTTON\_1'.
      output = 'Button 1'(001).
    WHEN 'BUTTON\_2'.
      output = 'Button 2'(002).
    WHEN 'BUTTON\_3'.
      output = 'Button 3'(003).
    WHEN 'BUTTON\_4'.
      output = 'Button 4'(004).
    WHEN OTHERS.
      output = save\_ok.
  ENDCASE.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The screen field of output is defined as not ready for input in Screen Painter. When the user chooses a pushbutton, the PAI event is triggered. The function code of the pushbutton is assigned to the dynpro field ok\_code, which is then assigned to the ABAP field with the same name. The module user\_command\_0100 is then processed. Firstly, the contents of the ok\_code field are copied to the auxiliary variable save\_ok code, and ok\_code is initialized. This procedure is always recommended since it makes sure that the dynpro field ok\_code is also reinitialized in the PBO event and does not contain any unwanted values. Next, in the CASE structure, a text symbol is assigned to the output field according to the button that the user chose. This is displayed in the output field on the dynpro. If the user chooses Cancel, the program ends.



**📖 Source**: [abendynpro_push_button_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_push_button_abexa.htm)

### abendynpro_radio_button_abexa.htm

> **📖 Official SAP Documentation**: [abendynpro_radio_button_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_radio_button_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Dynpro Fields](javascript:call_link\('abenabap_dynpros_fields.htm'\)) →  [Dynpro Fields - Examples](javascript:call_link\('abendynpro_field_abexas.htm'\)) → 

Dynpros, Checkboxes, and Radio Buttons

This example demonstrates how checkboxes and radio buttons can be processed on dynpros.

Source Code

PROGRAM demo\_dynpro\_check\_radio .
DATA: radio1(1) TYPE c, radio2(1) TYPE c, radio3(1) TYPE c,
      field1(10) TYPE c, field2(10) TYPE c, field3(10) TYPE c,
      box TYPE c.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
CALL SCREEN 100.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'RADIO'.
      IF radio1 = 'X'.
        field1 = 'Selected!'.
        CLEAR: field2, field3.
      ELSEIF radio2 = 'X'.
        field2 = 'Selected!'.
        CLEAR: field1, field3.
      ELSEIF radio3 = 'X'.
        field3 = 'Selected!'.
        CLEAR: field1, field2.
      ENDIF.
    WHEN 'CANCEL'.
      LEAVE PROGRAM.
  ENDCASE.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The screen fields field1 to field3 are defined as not ready for input in Screen Painter. Selecting one of the three radio buttons raises the event PAI, which passes the function code RADIO and the field contents of the screen fields to the ABAP program. The dialog module user\_command\_0100 fills the fields field1 to field3 according to the radio button that was selected. These field contents appear the next time the dynpro is sent. The PAI event is also triggered if you select the checkbox. In this case, the function CANCEL is passed to the ABAP program, and the dialog module user\_command\_0100 immediately ends the program.



**📖 Source**: [abendynpro_radio_button_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_radio_button_abexa.htm)

### abendynpro_strings_abexa.htm

> **📖 Official SAP Documentation**: [abendynpro_strings_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_strings_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Dynpro Fields](javascript:call_link\('abenabap_dynpros_fields.htm'\)) →  [Dynpro Fields - Examples](javascript:call_link\('abendynpro_field_abexas.htm'\)) → 

Dynpros, Strings

This example demonstrates how to bind strings to dynpro fields.

Source Code

REPORT demo\_dynpro\_strings.
DATA: string1 TYPE string,
      string2 TYPE string,
      char1   TYPE c LENGTH 10,
      char2   TYPE c LENGTH 100.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA  len TYPE i.
    string1 = \`123       \`.
    string2 = \`12345678901234567890\`.
    char1   = string1.
    char2   = string2.
    len = STRLEN( string1 ).
    WRITE:  'PBO:',
          / 'Length of STRING1:',  len.
    len = STRLEN( char1 ).
    WRITE: / 'Length of CHAR1:  ', len.
    len = STRLEN( string2 ).
    WRITE: / 'Length of STRING2:', len.
    len = STRLEN( char2 ).
    WRITE: / 'Length of CHAR2:  ', len.
    ULINE.
    CALL SCREEN 100.
    len = STRLEN( string1 ).
    WRITE:  'PAI:',
          / 'Length of STRING1:',  len.
    len = STRLEN( char1 ).
    WRITE: / 'Length of CHAR1:  ', len.
    len = STRLEN( string2 ).
    WRITE: / 'Length of STRING2:', len.
    len = STRLEN( char2 ).
    WRITE: / 'Length of CHAR2:  ', len.
    ULINE.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
   demo=>main( ).

Description

The static next dynpro number of dynpro 100 is 0. There are four input fields STRING1, STRING2, CHAR1, and CHAR2 of type CHAR with a length of 10. No modules are called in the dynpro flow logic.

When the program is executed, the screen is displayed with the values "123" and "1234567890" in the fields STRING1/CHAR1 and STRING2/CHAR2. After confirming with Continue, a list appears that displays the length of the content of the associated ABAP fields at PBO and PAI.

At PBO, STRING1 contains ten characters, seven of which are trailing blanks. These are lost during the assignment to CHAR1 and the character length of CHAR1 is only three.

At PAI, STRING1 contains only three characters, because the blanks are suppressed during the transport to and from the dynpro.

In both STRING2 and CHAR2, all characters that do not fit into the corresponding dynpro fields are cut off.



**📖 Source**: [abendynpro_strings_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_strings_abexa.htm)

### abendynpro_field_abexas.htm

> **📖 Official SAP Documentation**: [abendynpro_field_abexas.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abendynpro_field_abexas.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_abexas.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Dynpro Fields](javascript:call_link\('abenabap_dynpros_fields.htm'\)) → 

Dynpro Fields - Examples

Continue
![Example](exa.gif "Example") [Screens, Processing Input and Output Fields](javascript:call_link\('abendynpro_in_out_field_abexa.htm'\))
![Example](exa.gif "Example") [Dynpros, Fields with Reference to ABAP Dictionary](javascript:call_link\('abendynpro_dict_abexa.htm'\))
![Example](exa.gif "Example") [Dynpros, Pushbuttons](javascript:call_link\('abendynpro_push_button_abexa.htm'\))
![Example](exa.gif "Example") [Dynpros, Checkboxes, and Radio Buttons](javascript:call_link\('abendynpro_radio_button_abexa.htm'\))
![Example](exa.gif "Example") [Dynpros, Strings](javascript:call_link\('abendynpro_strings_abexa.htm'\))
