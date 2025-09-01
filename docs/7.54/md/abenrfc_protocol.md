  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc.htm) →  [RFC Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_intro_oview.htm) → 

RFC Protocol

The RFC protocol describes how data is passed to the RFC interface and back. [basXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbasxml_glosry.htm "Glossary Entry") is available as a unified format for all types of parameter passing. To use basXML, it must be specified in both transaction SM59 and in the transmission protocol for the destination and explicitly when creating an [RFM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfm_glosry.htm "Glossary Entry").

If one of these two prerequisites is not met, for example, for communication with systems in earlier releases (where basXML was not yet available), the RFC protocol is selected implicitly depending on the parameter type:

-   An internal binary format is used for flat parameters as well as when using [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination_para.htm) parameters.

-   An XML format known as xRFC is used for deep parameters.

Notes

-   For consistency reasons, the use of basXML is recommended as an RFC protocol for all types of parameter passes.

-   The performance of basXML is currently somewhere between the quicker binary format and the slower xRFC.

-   The binary format should therefore only be used for RFMs with critical performance requirements.

More Information

For more information about the RFC protocol and destinations, see the RFC documentation on [SAP Help Portal](http://help.sap.com).