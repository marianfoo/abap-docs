  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_intro_oview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Interface%2C%20ABENRFC_INTERFACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RFC - Interface

The RFC interface is required to execute a remote function call. The RFC interface performs the following services:

-   Calling and controlling the communication routines that are needed to communicate with the remote system.
-   Logging on to and logging off from the remote system and authorization checks for the function pools used.
-   Converting actual parameters to the format required in the remote system and vice-versa. This includes any platform-dependent conversions, for example, for different [code pages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencodepage_glosry.htm "Glossary Entry") or byte orders. The conversion supports all ABAP data types.
-   Handling of errors that occur during communication and forwarding them to the caller if [requested](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_exception.htm).

If the AS ABAP are not the same, two ABAP programs communicate with each other using the RFC interface, whereas for communication between an AS ABAP and an external system, an ABAP program connects with a program in a different programming language (C, C++, Visual Basic, Java or .NET).

For communication with programs in other programming languages, RFC libraries are available for all operating systems supported by SAP, including MS Windows, Unix and Linux:

-   Java Connector (JCo) for Java
-   .NET Connector for .NET (C#, VB.NET)
-   RFC Software Development Kit (SDK) for C and C++

Hint

Each execution of an RFC using the RFC interface on an AS ABAP takes place in its own user session. The logon data is usually stored in the RFC destination.

More Information   

For more information about the about the RFC interface, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.