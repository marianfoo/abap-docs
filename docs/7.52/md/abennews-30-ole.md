  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

OLE2 Automation Controller in Release 3.0

In Release 3.0, the ABAP interpreter command set has been extended to include key words that allow application programmers to process external objects. OLE2 was supported as the first object model. With the new key words

[CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\))
[SET PROPERTY](javascript:call_link\('abapset_property.htm'\))
[GET PROPERTY](javascript:call_link\('abapget_property.htm'\))

[CALL METHOD](javascript:call_link\('abapcall_method_ole2.htm'\))
[FREE OBJECT](javascript:call_link\('abapfree_object.htm'\))

you can link to all applications with functionality in the form of an OLE2 Automation Server from ABAP. Examples of this would be Microsoft products such as EXCEL or WINWORD.
All applications to be accessed from ABAP must be entered in a table maintained with the transaction SOLE. This table determines whether type information exists for an application. The type information describes all the objects that an application can handle, all their methods and properties, as well as their parameters. It can be loaded into the [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") so that the ABAP processor can perform the necessary type conversions and is not dependent on the language of the OLE application.
SAP recommends that you use only English names for methods and object attributes in ABAP, but the ABAP program can still process applications installed in another language.
The transaction OLE allows you to activate 3 OLE servers, and to test methods and properties by pressing certain keys.
Apart from the ABAP enhancements, an OLE-compatible SAPgui for 3.0 must also be active.

AS ABAP as OLE Automation Server

An [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") can itself be used as an Automation Server, i.e. you can call function modules that support Remote Function Calls from any OLE Automation Controller. For this purpose, the server program RFCSRV.EXE must be installed on the front-end. For further information, see the RFC Automation User's Guide.