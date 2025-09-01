  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

parameter transaction

A special [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") that associates a [dialog transaction](javascript:call_link\('abendialog_transaction_glosry.htm'\) "Glossary Entry") with parameters. The dialog transaction is called when a parameter transaction is called and the input fields of the [initial dynpro](javascript:call_link\('abeninitial_dynpro_glosry.htm'\) "Glossary Entry") of the dialog transaction are filled with parameters. The screen of the initial dynpro can be suppressed by specifying all mandatory input fields as parameters of the transaction, and if the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") is not the initial dynpro itself.