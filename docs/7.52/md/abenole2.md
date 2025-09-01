  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) → 

ABAP and OLE

You can use ABAP to process automation objects whose functions are available in the presentation layer in the form of an OLE Automation server. Only automation objects for Windows are supported. Typical applications that offer an automation interface are Microsoft Office products Excel and Word, in which public classes, their attributes and methods are found in the object catalog of the Visual Basic Editor at Tools → Macro → Visual Basic Editor → Object Browser.

All automation applications that can be used by ABAP are contained in the database table TOLE, which is maintained using transaction SOLE. This table contains the names of the classes and components supported by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry"). It also contains type information for adapting different data formats. The automation command set consists of the following ABAP statements:

-   [CREATE OBJECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_object_ole2.htm)

-   [CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_ole2.htm)

-   [GET PROPERTY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_property.htm)

-   [SET PROPERTY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_property.htm)

-   [FREE OBJECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_object.htm),

CREATE OBJECT and CALL METHOD should not be confounded with the ABAP Objects statements using the same syntax.

The statements of the automation command set are transferred from the ABAP runtime environment to the SAP GUI on the current presentation server which is responsible for the actual communication with the automation server. The transfer is not direct, the statements are first buffered in an automation queue and transferred at once to the SAP GUI in a flush call. By default, a flush is triggered by the next ABAP statement that does not belong to the automation command set.

Note

For processing some of the automation objects, now the more general interfaces SAP Desktop Office Integration (DOI) and Control Framework (CFW) are available. The statements of the automation command set should be used only to access automation applications for which there is no such wrapping.

Continue
[CREATE OBJECT - OLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_object_ole2.htm)
[CALL METHOD - OLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_ole2.htm)
[GET PROPERTY - OLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_property.htm)
[SET PROPERTY - OLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_property.htm)
[FREE OBJECT - OLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_object.htm)