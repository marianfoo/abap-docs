  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

parameter transaction

A special [transaction code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction_code_glosry.htm "Glossary Entry") that associates a [dialog transaction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_transaction_glosry.htm "Glossary Entry") with parameters. The dialog transaction is called when a parameter transaction is called and the input fields of the [initial dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitial_dynpro_glosry.htm "Glossary Entry") of the dialog transaction are filled with parameters. The screen of the initial dynpro can be suppressed by specifying all mandatory input fields as parameters of the transaction, and if the [next dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennext_dynpro_glosry.htm "Glossary Entry") is not the initial dynpro itself.