  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 3.0](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-30.htm) → 

OLE2 Automation Controller in Release 3.0

In Release 3.0, the ABAP interpreter command set has been extended to include key words that allow application programmers to process external objects. OLE2 was supported as the first object model. With the new key words

[CREATE OBJECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_object_ole2.htm)
[SET PROPERTY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_property.htm)
[GET PROPERTY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_property.htm)

[CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_ole2.htm)
[FREE OBJECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_object.htm)

you can link to all applications with functionality in the form of an OLE2 Automation Server from ABAP. Examples of this would be Microsoft products such as EXCEL or WINWORD.
All applications to be accessed from ABAP must be entered in a table maintained with the transaction SOLE. This table determines whether type information exists for an application. The type information describes all the objects that an application can handle, all their methods and properties, as well as their parameters. It can be loaded into the [AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") so that the ABAP processor can perform the necessary type conversions and is not dependent on the language of the OLE application.
SAP recommends that you use only English names for methods and object attributes in ABAP, but the ABAP program can still process applications installed in another language.
The transaction OLE allows you to activate 3 OLE servers, and to test methods and properties by pressing certain keys.
Apart from the ABAP enhancements, an OLE-compatible SAPgui for 3.0 must also be active.

AS ABAP as OLE Automation Server

An [AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") can itself be used as an Automation Server, i.e. you can call function modules that support Remote Function Calls from any OLE Automation Controller. For this purpose, the server program RFCSRV.EXE must be installed on the front-end. For further information, see the RFC Automation User's Guide.