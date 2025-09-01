---
title: "RFC - Exceptions"
description: |
  In the interface of a remote enabled function module(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenremote_enabled_fm_glosry.htm 'Glossary Entry'), it is currently only possible to specify classic exceptions, in other words non-class-based exceptions(https://help.sap.com/doc/abap
version: "7.55"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_exception.htm"
abapFile: "abenrfc_exception.htm"
keywords: ["do", "if", "try", "class", "data", "exception-handling", "abenrfc", "exception"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_intro_oview.htm) → 

RFC - Exceptions

In the interface of a [remote enabled function module](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry"), it is currently only possible to specify classic exceptions, in other words [non-class-based exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexceptions_non_class.htm). Class-based exceptions are supported only in internal SAP release tracks.

In an external function call, the non-class-based exceptions defined in the interface of the function module called using the [EXCEPTIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_destination_para.htm) addition of the statements [CALL FUNCTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_destination-.htm) or [RECEIVE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreceive.htm) can be assigned return values.

If EXCEPTIONS is specified, classic exception handling applies. If a remotely called function module raises a class-based exception, this exception is not transported and raises the predefined classical exception SYSTEM\_FAILURE instead

In addition to the exceptions which are specified explicitly in the interface of a remote-enabled function module, the following predefined exceptions can occur in the RFC:

-   SYSTEM\_FAILURE.
    This exception can be caused by error situations that arise when a remotely called function is executed on the RFC server. These error situations can be caused by runtime errors or sending a [message of type "A", "E", or "X"](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_message_rfc.htm).

-   COMMUNICATION\_FAILURE, RESOURCE\_FAILURE (only with [pRFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprfc_glosry.htm "Glossary Entry") or SYSTEM\_FAILURE)
    These exceptions are raised by all errors that occur when connections are being established, when resources are being assigned, or in the communication layer.

We strongly recommend that all predefined exceptions are handled.

Hints

-   If a remotely called function module raises a class-based exception, this always raises the predefined exception SYSTEM\_FAILURE of the RFC interface. Since no class-based exceptions can be specified in the interface of a remote-enabled function module, this only affects exceptions of the categories CX\_NO\_CHECK, especially CX\_SY\_NO\_HANDLER.

-   The recommendation to handle all predefined exceptions is particularly important in avoiding incompatibilities after the upcoming conversion to class-based exceptions in a future release.

More Information

For more information about exceptions during RFC calls, refer to the RFC documentation in SAP Help Portal.

Executable Example

[Exception Handling in RFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_exceptions_abexa.htm)