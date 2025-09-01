  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  S

SELECT-OPTIONS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options.htm)

Syntax

SELECT-OPTIONS selcrit FOR *{*dobj*|*(name)*}*
              *\[*OBLIGATORY*|*NO-DISPLAY*\]*
              *\[*VISIBLE LENGTH vlen*\]*
              *\[*NO-EXTENSION*\]*
              *\[*NO INTERVALS*\]*
              *\[*MODIF ID modid*\]*
              *\[*DEFAULT val1 *\[*TO val2*\]* *\[*OPTION opt*\]* *\[*SIGN sign*\]**\]*
              *\[*LOWER CASE*\]*
              *\[*MATCHCODE OBJECT search\_help*\]*
              *\[*MEMORY ID pid*\]*
              *\[*NO DATABASE SELECTION*\]*
              *\[*HELP-REQUEST  *\[*FOR *{*LOW*|*HIGH*}**\]**\]*
              *\[*VALUE-REQUEST *\[*FOR *{*LOW*|*HIGH*}**\]**\]*.

Effect

Declares an internal [selection table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_table_glosry.htm "Glossary Entry") selcrit for a [selection criterion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_criterion_glosry.htm "Glossary Entry") and creates the corresponding input fields on the current [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry").

Additions

-   [FOR *{*dobj*|*(name)*}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_for.htm)
    Specifies the data type with a static reference to a data object dobj or defines the data type using c with a length of 45, and represents the input fields according to the type specified dynamically in name.
    
-   [OBLIGATORY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_screen.htm)
    Defines the first input field as a mandatory field.
    
-   [NO-DISPLAY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_screen.htm)
    Does not create any input fields on the selection screen.
    
-   [VISIBLE LENGTH vlen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_screen.htm)
    Sets the visible length of the input fields to vlen.
    
-   [NO-EXTENSION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_screen.htm)
    Prevents multiple selections.
    
-   [NO INTERVALS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_screen.htm)
    Creates only the first input field on the selection screen.
    
-   [MODIF ID modid](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_modif_id.htm)
    Assigns the input fields to the [modification group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodification_group_glosry.htm "Glossary Entry") modid.
    
-   [DEFAULT val1 *\[*TO val2*\]* *\[*OPTION opt*\]* *\[*SIGN sign*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_value.htm)
    Creates [start values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstart_value_glosry.htm "Glossary Entry") val1, val2, opt, and sign for the first row of the selection table.
    
-   [LOWER CASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_value.htm)
    Prevents the content of character-like data objects from being converted into uppercase when they are transferred between input fields and an internal table.
    
-   [MATCHCODE OBJECT search\_help](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_value.htm)
    Associates the input fields with a search help search\_help from [ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary_glosry.htm "Glossary Entry").
    
-   [MEMORY ID pid](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_value.htm)
    Associates the first input field with the [SPA/GPA parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry") pid in the [user memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_memory_glosry.htm "Glossary Entry").
    
-   [NO DATABASE SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_no_db_sel.htm)
    Does not send the selection table to the logical database as a dynamic selection after [selection screen processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").
    
-   [*\[*HELP-REQUEST*\]* *\[*VALUE-REQUEST*\]* *\[*FOR *{*LOW*|*HIGH*}**\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_ldb.htm)
    Obsolete: Enables self-defined field helps (in [logical databases](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry")) and input helps for the first or second input field.