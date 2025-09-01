  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_abap_statements.htm) →  [Statements in Logical Databases](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_statements.htm) → 

SELECTION-SCREEN - ldb\_options

Obsolete Syntax Forms

[Versions of the standard selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_version.htm)
1\. SELECTION-SCREEN BEGIN OF VERSION vers text.
  ...
  SELECTION-SCREEN EXCLUDE *{*PARAMETERS para*}*          
                         *|* *{*SELECT-OPTIONS selcrit*}*  
                         *|* *{*RADIOBUTTON GROUPS group*}*  
                         *|* *{*BLOCKS block*}*            
                         *|* *{*IDS id*}*.
  ...
  SELECTION-SCREEN END OF VERSION vers.
[Nodes for field selections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_field.htm)
2\. SELECTION-SCREEN FIELD SELECTION
                   FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.
[Nodes for dynamic selections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_dynamic.htm)
3\. SELECTION-SCREEN DYNAMIC SELECTIONS
                   FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.

Effect

These variants of the command [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen.htm) are intended specially for use in a logical database and can only be specified in the [selection include](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_statements.htm).

Note

If logical databases are no longer created, these variants no longer need to be used.

Continue
[SELECTION-SCREEN BEGIN OF VERSION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_version.htm)
[SELECTION-SCREEN FIELD SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_field.htm)
[SELECTION-SCREEN DYNAMIC SELECTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_dynamic.htm)
[SELECTION-SCREEN - ldb\_additions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_additions.htm)