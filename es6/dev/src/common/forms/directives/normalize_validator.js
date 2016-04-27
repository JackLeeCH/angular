export function normalizeValidator(validator) {
    if (validator.validate !== undefined) {
        return (c) => validator.validate(c);
    }
    else {
        return validator;
    }
}
export function normalizeAsyncValidator(validator) {
    if (validator.validate !== undefined) {
        return (c) => Promise.resolve(validator.validate(c));
    }
    else {
        return validator;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplX3ZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtSlExS1QzcGYudG1wL2FuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvZGlyZWN0aXZlcy9ub3JtYWxpemVfdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLG1DQUFtQyxTQUFrQztJQUNuRSxFQUFFLENBQUMsQ0FBYSxTQUFVLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLENBQUMsQ0FBa0IsS0FBaUIsU0FBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQWMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7QUFDSCxDQUFDO0FBRUQsd0NBQXdDLFNBQXVDO0lBQzdFLEVBQUUsQ0FBQyxDQUFhLFNBQVUsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsQ0FBQyxDQUFrQixLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQWEsU0FBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sQ0FBbUIsU0FBUyxDQUFDO0lBQ3JDLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBYnN0cmFjdENvbnRyb2x9IGZyb20gXCIuLi9tb2RlbFwiO1xuaW1wb3J0IHtWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBBc3luY1ZhbGlkYXRvckZufSBmcm9tICcuL3ZhbGlkYXRvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVmFsaWRhdG9yKHZhbGlkYXRvcjogVmFsaWRhdG9yRm4gfCBWYWxpZGF0b3IpOiBWYWxpZGF0b3JGbiB7XG4gIGlmICgoPFZhbGlkYXRvcj52YWxpZGF0b3IpLnZhbGlkYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKGM6IEFic3RyYWN0Q29udHJvbCkgPT4gKDxWYWxpZGF0b3I+dmFsaWRhdG9yKS52YWxpZGF0ZShjKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPFZhbGlkYXRvckZuPnZhbGlkYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQXN5bmNWYWxpZGF0b3IodmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuIHwgVmFsaWRhdG9yKTogQXN5bmNWYWxpZGF0b3JGbiB7XG4gIGlmICgoPFZhbGlkYXRvcj52YWxpZGF0b3IpLnZhbGlkYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKGM6IEFic3RyYWN0Q29udHJvbCkgPT4gUHJvbWlzZS5yZXNvbHZlKCg8VmFsaWRhdG9yPnZhbGlkYXRvcikudmFsaWRhdGUoYykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8QXN5bmNWYWxpZGF0b3JGbj52YWxpZGF0b3I7XG4gIH1cbn1cbiJdfQ==