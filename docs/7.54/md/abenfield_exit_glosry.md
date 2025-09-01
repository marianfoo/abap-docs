  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

field exit

Obsolete [customer exit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencustomer_exit_glosry.htm "Glossary Entry") that can be associated with [data elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_element_glosry.htm "Glossary Entry") in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") in customer systems. If a [dynpro field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_field_glosry.htm "Glossary Entry") is defined with reference to a data element of this type, a function module called FIELD\_EXIT\_dtel is called in data transports from the dynpro to the ABAP program at [PAI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpai_glosry.htm "Glossary Entry") time. Here, dtel is the name of the data element. The value of the dynpro field can be modified in the function module. The function module of a field exit cannot currently be debugged.