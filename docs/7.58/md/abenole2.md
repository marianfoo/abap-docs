  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20and%20OLE%2C%20ABENOLE2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP and OLE

ABAP can be used to process automation objects whose functions are available in the presentation layer in the form of an OLE automation server. Only automation objects for Windows are supported. Typical applications that offer an automation interface are Microsoft Office products Excel and Word, for which the published classes and their attributes and methods are found in the object directory of the Visual Basic Editor called using the Macro menu option.

All automation applications that can be used from ABAP are contained in the database table TOLE, which is maintained using transaction SOLE. This table contains the names of the classes and components supported by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry"). It also contains type information for adapting different data formats. The automation command set consists of the following ABAP statements:

-   [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_ole2.htm)
-   [CALL METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_ole2.htm)
-   [GET PROPERTY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_property.htm)
-   [SET PROPERTY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_property.htm)
-   [FREE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_object.htm),

where CREATE OBJECT and CALL METHOD must not be confused with the identically named ABAP Objects statements.

The statements of the automation command set are passed from the ABAP runtime framework to the SAP GUI on the current presentation server, which performs the actual communication with the automation server. The statements are not passed directly and are first buffered in an automation queue and passed together to the SAP GUI during a flush. By default, a flush is triggered by the next ABAP statement that does not belong to the automation command set.

Hint

For processing some of the automation objects, the more general interfaces SAP Desktop Office Integration (DOI) and Control Framework (CFW) are now available. The statements of the automation command set should be used only to access automation applications for which there is no such wrapping.

Continue
[CREATE OBJECT, OLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_ole2.htm)
[CALL METHOD, OLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_ole2.htm)
[GET PROPERTY, OLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_property.htm)
[SET PROPERTY, OLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_property.htm)
[FREE OBJECT, OLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_object.htm)