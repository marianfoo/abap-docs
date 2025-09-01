  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) → 

dynpro - Dynpro Fields

The [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") does not contain any data declarations. Apart from the [OK field](javascript:call_link\('abenok_field_glosry.htm'\) "Glossary Entry") that is created when the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") itself is created, all other data objects of a dynpro (dynpro fields) are created when the screen elements are defined in the Layout Editor and assigned to the latter. The technical attributes length and data type of a dynpro field are determined by the element attributes defLg and Format. The data types of dynpro fields are determined either by reference to [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) from the ABAP Dictionary (except CLNT and FLTP) or by reference to global fields of the ABAP program. In the Layout Editor, fields can be copied from the ABAP Dictionary or the ABAP program, in which case name, length and data type of the dynpro fields are automatically defined in a matching way. All elementary data types except [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") are possible.

After [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing and before the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is sent, there is a data transport of global data objects for the respective ABAP program to identically named dynpro fields. After a user action on the screen and before or during [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing, the data transport takes place in reverse order.

At PBO time, all dynpro fields are transported at the end of PBO processing, except for fields that are defined in table controls or in [step loops](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry"). The latter are processed in loops in the flow logic and transported from the ABAP program to the dynpro after each loop execution. At PAI time, first the content of all dynpro fields that do not belong to any [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") or step loop and are not specified in any [FIELD](javascript:call_link\('dynpfield.htm'\)) statement is transported into the identically named fields in the ABAP program. The content of the fields of a table control or step loop is transported to the ABAP program line by line or group by group at the beginning of the respective loop run. The fields that are specified in the FIELD statements of the dynpro flow logic are transported upon execution of the corresponding FIELD statement.

Input and output fields must have a unique name (element attribute Name). Pure display elements such as text fields or frames are not linked with dynpro fields and do not necessarily need a unique name. When input and output fields are created by using fields from the ABAP Dictionary, the system usually also creates field labels using texts from the dictionary. The default name for these text fields is the same name as the dynpro fields of the input and output fields.

Apart from the dynpro fields defined in the Screen Painter, a dynpro also knows the [system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") of the ABAP program. In contrast to the program, these system fields are exclusively addressed as syst-name.

Hints

-   When dynpro fields are defined with reference to [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") in the ABAP Dictionary, the identically named global data objects of the ABAP program must have been declared with the statement [TABLES](javascript:call_link\('abaptables.htm'\)) as an [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry"). Otherwise, there will be no data transport.
-   The attributes of dynpro fields that were not created by copying from the program or ABAP Dictionary must be set in the Screen Painter. In particular, the name of the [OK field](javascript:call_link\('abenok_field_glosry.htm'\) "Glossary Entry") must be determined for every dynpro, so that the dynpro field is actually evaluated by the runtime framework.
-   When dynpro fields with character-like dictionary type are passed, lowercase letters are transformed to uppercase letters by default. This behavior can be overridden in the Screen Painter. Furthermore, the preservation of [lowercase letters](javascript:call_link\('abenddic_domains_sema.htm'\)) can be defined for data elements in the semantic attributes of a domain.
-   When dynpro fields are received from input fields on the screen, input fields are templates that expect a certain format depending on the data type of the underlying dynpro field. When passed to the dynpro field, the input is converted to a value of the appropriate type. This also means that some characters function as special characters by default.
    
    -   The "!" character in the initial position of an input field on the screen deletes all characters in the field before the data transport.
    -   The "=" character in the initial position of an input field on the screen initiates a search using [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry").
    -   If an input field contains only blanks and "\_" characters, the latter are transported as blanks.
    
    To deactivate the template and therefore the modifying effect of special characters, the attribute Without Template can be activated in the Screen Painter. However, the template cannot be deactivated for [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").
    
-   If the type of the dynpro field is a numeric type defined in the ABAP Dictionary, the attribute sign must be set for the type attribute, so that negative numbers can be displayed on the screen layout. This setting is only possible for [DDIC domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") and not for specifying a built-in type directly for [DDIC data elements](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") or structure components. If a negative number is entered in an input field, although the property is not set, the number is returned with an error message. If the associated ABAP data object when the dynpro is called contains a negative number, an uncatchable exception is raised.
-   On the screen, the content of dynpro fields is displayed as character-like. This means that the displayed value may differ from the internal representation. This applies in particular for the display of initial values. On the screen, all initial fields apart from those of type STRING or SSTRING are filled with blanks, while internally they contain a type-dependent initial value. Initial fields of type STRING and SSTRING are empty on the screen, which means that the cursor cannot be moved within the output length.
-   Dynpro fields can be linked with [SPA/GPA parameters in the user memory](javascript:call_link\('abenspa_gpa.htm'\)).
-   To enable explicit data transports between an ABAP program and dynpro fields, function modules such as DYNP\_UPDATE\_FIELDS are used.
-   ABAP fields of types string or xstring can be bound to identically named dynpro fields, just like fields of fixed length. However, it should be noted that there are no dynpro fields of variable length. The length of a dynpro field is always defined in Screen Painter by the element attribute defLg. In data transports between strings in the ABAP program and identically named dynpro fields, dynpro fields behave like target or source fields of fixed length, independent of their data type, and the respective [conversion rules](javascript:call_link\('abenconversion_elementary.htm'\)) apply, especially the following:
    
    -   If, during the transport of a character string or byte string to a dynpro field, the string contains more characters than the length of the dynpro field, any surplus characters or bytes are cut off. Since a dynpro field may not exceed 132 characters of length, only up to 132 characters or bytes of a character string or byte string may be transported to the dynpro.
    -   When transporting a character-like dynpro field to the ABAP program, trailing blanks are ignored.
    
    These limitations apply to transports between regular input/output fields, fields in Table Controls, and in Drop Down-Boxes.
    
-   For special handling of [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"), see [Decimal Floating Point Numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)).
-   For special handling of fields of the type CURR, see [Currency Fields](javascript:call_link\('abenddic_currency_field.htm'\)).
-   For special handling of fields of the type QUAN, see [Quantity Fields](javascript:call_link\('abenddic_quantity_field.htm'\)).

Continue
[dynpro - Examples of Dynpro Fields](javascript:call_link\('abendynpro_field_abexas.htm'\))