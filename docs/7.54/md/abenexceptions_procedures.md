  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions.htm) →  [System Response after a Class-Based Exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_system_response.htm) → 

Class-Based Exceptions in Procedures

If a class-based exception is not handled in a [procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry"), the system attempts to [propagate](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_system_response.htm) it to the caller of the procedure. The exceptions that can be propagated from a procedure must be declared in its interface. The caller then knows which exceptions to expect from the procedure. Class-based exceptions are divided into three [categories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_categories.htm), which determine whether the declaration must be explicit and how it is checked.

In methods and subroutines , the addition RAISING of the statements [METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods.htm) and [FORM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapform.htm) is used for the declaration. In function modules and methods of global classes, class-based exceptions are declared in the interface by selecting the Exception Class checkbox on the relevant tab page in [Class Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_builder_glosry.htm "Glossary Entry") or [Function Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_builder_glosry.htm "Glossary Entry"). The addition RAISING then appears as a [comment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) of the statement [FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm). The declaration of an exception class in an interface is polymorphous. It declares all subclasses simultaneously.

Declarations using RAISING can be used to define whether a [resumable exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresumable_exception_glosry.htm "Glossary Entry") propagated from a procedure remains resumable or not. A resumable exception remains resumable only if the addition RESUMABLE is declared for every parameter interface it passes when propagated. The addition RESUMABLE in RAISING does not make a non-resumable exception resumable when it is propagated through an interface.

Undeclared exceptions cannot leave a procedure and violate the interface if they are not handled within the procedure. A violation of the interface raises an exception of the predefined class CX\_SY\_NO\_HANDLER, whose exception object contains a reference to the original exception in the attribute PREVIOUS.

The top level of a program into which the exceptions can be propagated consists of processing blocks without local [data area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_area_glosry.htm "Glossary Entry")s, namely event blocks or dialog modules. Here, all exceptions raised at this level must be handled, since otherwise a runtime error occurs.

When exceptions are propagated from procedures, the following restrictions apply:

-   Exceptions cannot be declared in the definition of a [static constructor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass-methods_constructor.htm). This means that exceptions cannot leave the static constructor. It is not normally possible to tell whether the consumer of a class is the first consumer and whether or not this consumer needs to handle exceptions propagated by the static constructor.

-   Exceptions cannot be declared in the definition of an [event handler](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_handler_glosry.htm "Glossary Entry"). This means that no exceptions can be propagated from an event handler (except those of category CX\_NO\_CHECK). See [Class-Based Exceptions in Event Handlers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_events.htm).

Programs called using [SUBMIT ... AND RETURN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm) or [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transaction.htm) cannot propagate exceptions to the caller, since exception objects are bound to the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of a program.

Notes

-   When an exception of type CX\_SY\_NO\_HANDLER is raised, this indicates a programming error within a procedure, where the programmer forgot to prevent an exception of category CX\_DYNAMIC\_CHECK or CX\_STATIC\_CHECK, handle it locally, or declare it. When exceptions of type CX\_SY\_NO\_HANDLER are handled, it is therefore best not to try to handle the original exception and inform the person responsible for the program instead. In the case of exceptions of type CX\_STATIC\_CHECK, the syntax check also reports this.

-   If the exception CX\_SY\_NO\_HANDLER is not handled after the interface is violated, the runtime error is raised by the original exception and the associated [short dump](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshort_dump_glosry.htm "Glossary Entry") describes this exception. This indicates that, primarily, the original exception is to be stopped, handled, or declared by the procedure. The short dump is not intended to specify that the exception CX\_SY\_NO\_HANDLER is handled instead.